Acko.Sky = function () {
  this.order = 1;

  this.space = 0;
}

Acko.Sky.prototype = _.extend(new Acko.Effect(), {

  build: function (world, assets, exports) {
    var texture = assets['milkyway-panorama-dark'];

    var geometry = new THREE.SphereGeometry(3000, 60, 40);
    _.each(geometry.faceVertexUvs, function (uvs) {
      _.each(uvs, function (face) {
        _.each(face, function (uv) {
          uv.v = Math.asin(uv.v * 2.0 - 1.0) / 3.14 * .97 + .5;
        });
      });
    });

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
      }
    };

    var material = new ThreeRTT.ShaderMaterial(world, 'sky-vertex', 'sky-density', texture, uniforms);

    var sky = this.sky = new THREE.Mesh(geometry, material);
    sky.scale.set(-1, 1, 1);
    sky.eulerOrder = 'XZY';
    sky.rotation.set(0, .3, -.9);
    sky.renderDepth = 1000.0;
    sky.tag = "tag";
    tQuery(sky).addTo(world);

    exports.sky = this;
  },

  update: function (world, time, exports) {
    this.sky.visible = this.visible;

    exports.inSpace = this.space;

    this.uniforms.fisheye.value = exports.fisheye;
    this.uniforms.aspect.value = exports.aspect;

    this.uniforms.space.value = this.space;
  },

});

Acko.EffectList.push(new Acko.Sky());
