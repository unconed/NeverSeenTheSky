Acko.Grain = function () {
  this.order = 0;
}

Acko.Grain.prototype = _.extend(new Acko.Effect(), {

  build: function (world, assets, exports) {
    var uniforms = this.uniforms = {
      seed: {
        type: 'f',
        value: 0,
      },
      scale: {
        type: 'v2',
        value: new THREE.Vector2(0, 0),
      },
    };

    var grain = this.grain = world.compose(world, 'overlay-grain', {}, uniforms);

    var material = grain.mesh.material;
    material.blending = THREE.AdditiveBlending;
    material.transparent = true;
    material.depthWrite = false;
    material.depthTest = false;
    grain.mesh.renderDepth = 1500.0;

    exports.grain = this;
  },

  update: function (world, time) {
    this.grain.mesh.visible = this.visible;
    this.uniforms.seed.value = (this.uniforms.seed.value + 1) % 100;
    this.uniforms.scale.value.x = this.width/64;
    this.uniforms.scale.value.y = this.height/64;
  },

  resize: function (width, height) {
    this.width = width;
    this.height = height;
  },

});

Acko.EffectList.push(new Acko.Grain());

