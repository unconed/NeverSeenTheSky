Acko.Earth = function () {
  this.hide();
  this.order = 0;

  this.scroll = 0;
  this.sun = [.4, -0.3, 0];
}

Acko.Earth.prototype = _.extend(new Acko.Effect(), {

  build: function (world, assets, exports) {
    var earth = assets['earth-night'];
    earth.wrapS = THREE.RepeatWrapping;
    earth.wrapT = THREE.RepeatWrapping;

    var cloud = assets['cloud'];
    cloud.wrapS = THREE.RepeatWrapping;
    cloud.wrapT = THREE.RepeatWrapping;
    cloud.minFilter = THREE.LinearFilter;
    cloud.magFilter = THREE.LinearFilter;
    cloud.wrapS = THREE.RepeatWrapping;
    cloud.wrapT = THREE.RepeatWrapping;
    cloud.format = THREE.LuminanceFormat;

    var geometry = new THREE.SphereGeometry(200, 90, 60);
    _.each(geometry.faceVertexUvs, function (uvs) {
      _.each(uvs, function (face) {
        _.each(face, function (uv) {
          uv.v = uv.v * 2.0 - 1.0;
        });
      });
    });
    geometry.computeTangents();

    // Make linearly shaded noise texture
    var noise2 = new THREE.Texture(noise.image);
    noise2.minFilter = THREE.LinearFilter;
    noise2.magFilter = THREE.LinearFilter
    noise2.wrapS = THREE.RepeatWrapping;
    noise2.wrapT = THREE.RepeatWrapping;
    noise2.type = THREE.FloatType;
    noise2.format = THREE.LuminanceAlphaFormat;
    noise2.needsUpdate = true;

    var uniforms = this.uniforms = {
      earthScroll: {
        type: 'f',
        value: 0,
      },
      cloudScroll: {
        type: 'f',
        value: 0,
      },
      center: {
        type: 'v3',
        value: new THREE.Vector3(0, -200, 0),
      },
      sun: {
        type: 'v3',
        value: new THREE.Vector3(),
      },
    };

    var uniforms2 = this.uniforms2 = {
      earthScroll: {
        type: 'f',
        value: 0,
      },
      cloudScroll: {
        type: 'f',
        value: 0,
      },
      center: {
        type: 'v3',
        value: new THREE.Vector3(0, -200, 0),
      },
      sun: {
        type: 'v3',
        value: new THREE.Vector3(),
      },
    };

    var material = new ThreeRTT.ShaderMaterial(world, 'earth-vertex', 'earth-fragment', {
      earth: earth,
      cloud: cloud,
      noise: noise2,
    }, uniforms);

    var mesh = this.earth = new THREE.Mesh(geometry, material);
    mesh.position.set(0, -200, 0);
    mesh.eulerOrder = 'ZXY';
    mesh.rotation.set(.3, 1.2, 0.624);

    tQuery(mesh).addTo(world);

    var geometry2 = new THREE.SphereGeometry(1.05*200, 90, 60);
    var material2 = new ThreeRTT.ShaderMaterial(world, 'atmo-vertex', 'atmo-fragment', {}, uniforms2);
    material2.side = THREE.BackSide;
    material2.depthTest = true;
    material2.depthWrite = false;
    material2.blending = THREE.AdditiveBlending;
    material2.transparent = true;

    var atmo = this.atmo = new THREE.Mesh(geometry2, material2);
    atmo.position.set(0, -200, 0);
    atmo.eulerOrder = 'ZXY';
    atmo.rotation.set(.3, 1.2, 0.624);
    atmo.renderDepth = 100000;

    tQuery(atmo).addTo(world);

    exports.earth = this;
  },

  update: function (world, time) {
    this.earth.visible = this.visible;
    this.atmo.visible = this.visible;

    var v;
    (v = this.uniforms.sun.value).set.apply(v, this.sun);
    (v = this.uniforms2.sun.value).set.apply(v, this.sun);

    this.uniforms.earthScroll.value = 0.06;
    this.uniforms.cloudScroll.value = this.scroll + 0.08;

    exports.scroll = this.scroll;
  },

});

Acko.EffectList.push(new Acko.Earth());



