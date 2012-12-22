Acko.Aurora = function () {
  this.order = 1;

  this.bend = 0;
  this.color1 = [.03, .5, .5];
  this.color2 = [.03, .7, .2];
}

Acko.Aurora.prototype = _.extend(new Acko.Effect(), {

  build: function (world, assets, exports) {

    // Process density buffer for display
    var opts = {
      width: 512,
      height: 512,
      history: 0,
      autoRendering: true,
      texture: {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
        wrapS: THREE.RepeatWrapping,
        wrapT: THREE.RepeatWrapping,
      },
    };

    var uniforms0 = this.uniforms0 = {
      time: {
        type: 'f',
        value: 0,
      },
    };
    var uniforms1 = this.uniforms1 = {
      center: {
        type: 'v3',
        value: new THREE.Vector3(),
      },
      radius: {
        type: 'f',
        value: 0.125,
      },
    };
    var uniforms2 = this.uniforms2 = {
      center: {
        type: 'v3',
        value: new THREE.Vector3(),
      },
      radius: {
        type: 'f',
        value: 0.25,
      },
    }
    var uniforms3 = this.uniforms3 = {
      center: {
        type: 'v3',
        value: new THREE.Vector3(),
      },
      radius: {
        type: 'f',
        value: 0.5,
      },
    };

    var blur = this.blur = world
      .rtt(opts)
      .fragment('volumetric-crisp', { noise: exports.noiseTexture, texture: exports.field }, uniforms0)
      .fragment('volumetric-blur', blur, uniforms1)
      .fragment('volumetric-blur', blur, uniforms2)
      .fragment('volumetric-blur', blur, uniforms3)

    var geometry = new THREE.PlaneGeometry(2, 2, 64, 64);
    geometry.computeTangents();

    var uniforms = this.uniforms = {
      aspect: {
        type: 'f',
        value: 1,
      },
      fisheye: {
        type: 'f',
        value: 0,
      },
      bend: {
        type: 'f',
        value: 0,
      },
      scale: {
        type: 'f',
        value: .025,
      },
      color1: {
        type: 'v3',
        value: new THREE.Vector3(),
      },
      color2: {
        type: 'v3',
        value: new THREE.Vector3(),
      },
      localCamera: {
        type: 'v3',
        value: new THREE.Vector3(),
      },
    };

    var material = new ThreeRTT.ShaderMaterial(world, 'volumetric-vertex', 'volumetric-fragment', { texture: exports.field, noise: exports.noise, blur: blur }, uniforms);
    material.side = THREE.DoubleSide;
    material.transparent = true;
    material.blending = THREE.AdditiveBlending;
    material.depthWrite = false;

    var aurora = this.aurora = new THREE.Mesh(geometry, material);
    aurora.scale.set(80, 80, 80)
    aurora.position.set(0, 10, 0)
    aurora.rotation.set(τ/4, 0, 0);
    aurora.renderDepth = 2000;

    exports.rig.add(aurora);
//    tQuery(aurora).addTo(world);

    exports.aurora = this;
  },

  update: function (world, time, exports) {
    var v;

    this.aurora.visible = this.visible;

    this.uniforms.bend.value = this.bend;
    this.uniforms.fisheye.value = exports.fisheye;
    this.uniforms.aspect.value = exports.aspect;

    (v = this.uniforms.color1.value).set.apply(v, this.color1);
    (v = this.uniforms.color2.value).set.apply(v, this.color2);

    (v = this.uniforms.localCamera.value).copy(world.tCamera().position);

    this.uniforms0.time.value = time * 20;

    var c = this.uniforms1.center.value;
    var d = this.uniforms2.center.value;
    var e = this.uniforms3.center.value;

    var camera = world.tCamera();
    c.copy(camera.position).multiplyScalar(.00625).addSelf({ x: .5, y: -.0625, z: .5 });
    d.copy(c);
    e.copy(c);

    exports.color1 = this.color1;
    exports.color2 = this.color2;

  },

});

Acko.EffectList.push(new Acko.Aurora());
