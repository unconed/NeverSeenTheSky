Acko.Land = function () {
  this.order = 2;
}

Acko.Land.prototype = _.extend(new Acko.Effect(), {

  build: function (world, assets, exports) {
    var opts = {
      width: 2048,
      height: 2048,
//      width: 512,
//      height: 512,
      history: -1,
      autoRendering: false,
      texture: {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
        type: THREE.FloatType,
        wrapS: THREE.ClampToEdgeWrapping,
        wrapT: THREE.ClampToEdgeWrapping,
      },
    };

    var xyScale = 4;
    var heightScale = .5;

    var uniforms = this.uniforms = {
      noiseStep: {
        type: 'f',
        value: exports.noiseStep,
      },
    };
    var uniforms2 = this.uniforms2 = {
      noiseStep: {
        type: 'f',
        value: exports.noiseStep,
      },
      heightScale: {
        type: 'f',
        value: heightScale * 2.0,
      },
      normalStrength: {
        type: 'f',
        value: 2.0 * xyScale / heightScale,
      },
      color1: {
        type: 'v3',
        value: new THREE.Vector3(0, 0, 0),
      },
      color2: {
        type: 'v3',
        value: new THREE.Vector3(0, 0, 0),
      },
      lightPosition1: {
        type: 'v3',
        value: new THREE.Vector3(0, 0, 0),
      },
      lightPosition2: {
        type: 'v3',
        value: new THREE.Vector3(0, 0, 0),
      },
      aspect: {
        type: 'f',
        value: 1,
      },
      fisheye: {
        type: 'f',
        value: 1,
      },
    };

    // Generate heightmap (and measure time taken)
    var start = +new Date();
    height = world
      .rtt(opts);
    height
      .fragment('land-heightmap', { noise: exports.noiseTexture }, uniforms)
      .render();
    exports.genTime = +new Date() - start;

    // Downsample to 256x256 with AA
    var down1 = world.rtt(opts).downsample(height).render();
    var down2 = world.rtt(opts).downsample(down1).render();
    var down3 = world.rtt(opts).downsample(down2).render();

    // Make linearly shaded noise texture
    var noise = this.noise = new THREE.Texture(exports.noiseTexture.image);
    noise.minFilter = THREE.LinearFilter;
    noise.magFilter = THREE.LinearFilter
    noise.wrapS = THREE.RepeatWrapping;
    noise.wrapT = THREE.RepeatWrapping;
    noise.type = THREE.FloatType;
    noise.format = THREE.LuminanceAlphaFormat;
    noise.needsUpdate = true;

    var geometry = new THREE.PlaneGeometry(2, 2, 256, 256);
    var material = new ThreeRTT.ShaderMaterial(
                    height, 'land-vertex', 'land-fragment', {
                      down: down3,
                      texture: height,
                      noise: noise,
                    }, uniforms2);
    material.wireframe = false;

    var land = this.land = new THREE.Mesh(geometry, material);
    land.position.set(0, -1.5, 0);
    land.rotation.set(-τ/4, 0, 0);
    land.scale.set(xyScale / 2.0, xyScale / 2.0, 1.0);

    tQuery(land).addTo(world);

    exports.land = this;
  },

  update: function (world, time, exports) {
    this.land.visible = this.visible;

    var v;

    this.uniforms2.fisheye.value = exports.fisheye;
    this.uniforms2.aspect.value = exports.aspect;

    v = this.uniforms2.lightPosition1.value;
    v.x = Math.cos(time*2.0+Math.sin(time*.57))*1.5;
    v.z = Math.sin(time*2.0)*1.5;
    v.y = 1.1;

    v = this.uniforms2.lightPosition2.value;
    v.x = Math.cos(time*1.81+2+Math.sin(time*.47))*1.5;
    v.z = -Math.sin(time*2.11+3)*1.5;
    v.y = 1.1;

    (v = this.uniforms2.color1.value).set.apply(v, exports.color1);
    (v = this.uniforms2.color2.value).set.apply(v, exports.color2);
  },

});

Acko.EffectList.push(new Acko.Land());
