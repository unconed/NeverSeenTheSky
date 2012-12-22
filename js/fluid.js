Acko.Fluid = function () {
  this.order = 0;
}

Acko.Fluid.prototype = _.extend(new Acko.Effect(), {

  build: function (world, assets, exports) {
    var timeStep = 1.0;

    var bufferOpts = {
      width: 256,
      height: 256,
      history: -1,
      autoRendering: true,
      texture: {
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        type: THREE.FloatType,
        format: THREE.RGBAFormat,
        wrapS: THREE.RepeatWrapping,
        wrapT: THREE.RepeatWrapping,
      },
    };

    var fieldOpts = _.extend({}, bufferOpts, {
      history: 2,
      texture: {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        type: THREE.FloatType,
        format: THREE.RGBAFormat,
        wrapS: THREE.RepeatWrapping,
        wrapT: THREE.RepeatWrapping,
      },
    });

    var pressureOpts = _.extend({}, bufferOpts, {
      history: 0,
    });

    // Buffer: Velocity/Density
    var field = this.field = world
      .rtt(fieldOpts)
      .fragment('cfd-reset')
      .render()
      .reset();

    // Buffer: Divergence
    var divergence = this.divergence = world.rtt(bufferOpts).fragment('cfd-divergence', field).render();

    // Buffer: Iterative pressure relaxation
    var pressure = this.pressure = world
      .rtt(pressureOpts);
    pressure
      .iterate(9, 'cfd-pressure-relax', {
        pressure: pressure,
        divergence: divergence,
      })
      .render();

    // Density painter placeholder
    var brush = new THREE.Object3D();

    // Prepare uniforms
    var uniforms = this.uniforms = {
      timeStep: { type: 'f', value: timeStep },
    };
    var uniforms2 = this.uniforms2 = {
      timeStep: { type: 'f', value: -timeStep },
    };
    var uniforms3 = this.uniforms3 = {
      timeStep: { type: 'f', value: timeStep },
      field: field.uniform(),
    };
    var uniforms4 = this.uniforms4 = {
      timeStep: { type: 'f', value: timeStep },
    };
    var textures4 = {
      field: field,
      divergence: divergence,
    };

    // Project and advect density + velocity field
    field
      .fragment('cfd-stretch', textures4, uniforms4)
      .fragment('cfd-project', {
        pressure: pressure,
        field: field,
      })
      .fragment('cfd-advect',    field, uniforms)
      .fragment('cfd-advect',    field, uniforms2)
      .fragment('cfd-mccormack', field, uniforms3)
      .paint(brush)
      .render();

    exports.fluid = this;
    exports.field = field;
    exports.divergence = divergence;
    exports.pressure = pressure;
    exports.brush = brush;
  },

  update: function (world, time) {
    if (this.visible) {

      var timeStep = 1;
      if (this.last) {
        timeStep = Math.min(3, (time - this.last) * 60);
      }
      this.last = time;

      this.uniforms.value = timeStep;
      this.uniforms2.value = -timeStep;
      this.uniforms3.value = timeStep;
      this.uniforms4.value = timeStep;

      this.field.render();
      this.divergence.render();
      this.pressure.render();
    }
  },

});

Acko.EffectList.push(new Acko.Fluid());


