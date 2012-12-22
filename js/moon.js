Acko.Moon = function () {
  this.order = 2;
}

Acko.Moon.prototype = _.extend(new Acko.Effect(), {

  build: function (world, assets, exports) {
    var texture = assets['moon'];

    var geometry = new THREE.PlaneGeometry(1, 1, 8, 8);

    var uniforms = this.uniforms = {
      aspect: {
        type: 'f',
        value: 1,
      },
      fisheye: {
        type: 'f',
        value: 1,
      },
      space: {
        type: 'f',
        value: 0,
      },
    };

    var material = new ThreeRTT.ShaderMaterial(world, 'sky-vertex', 'sky-density', texture);

    var moon = this.moon = new THREE.Mesh(geometry, material);
    moon.position.set(0.0, 1280.0, -2310.0);
    moon.scale.set(370, 370, 370);
    moon.rotation.set(0.57, 0, -.3);
    moon.renderDepth = 2000.0;
    moon.frustumCulled = false;

    tQuery(moon).addTo(world);

    exports.moon = this;
  },

  update: function (world, time, exports) {
    this.moon.visible = this.visible;

    this.uniforms.fisheye.value = exports.fisheye;
    this.uniforms.aspect.value = exports.aspect;

    this.uniforms.space.value = exports.inSpace;
  },

});

Acko.EffectList.push(new Acko.Moon());
