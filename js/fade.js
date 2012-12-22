Acko.Fade = function () {
  this.order = 0;

  this.opacity = 1;
  this.preset = 0;
  this.fades = [];

  this.first = true;
}

Acko.Fade.prototype = _.extend(new Acko.Effect(), {

  build: function (world, assets, exports) {
    var uniforms = this.uniforms = {
      opacity: {
        type: 'f',
        value: 0,
      },
      aspect: {
        type: 'f',
        value: 0,
      },
      fisheye: {
        type: 'f',
        value: 0,
      },
    };

    var fade0 = this.fades[0] = world.compose(world, 'overlay-fade-solid', {}, uniforms);
    var material = fade0.mesh.material;
    material.blending = THREE.MultiplyBlending;
    material.transparent = true;
    material.depthWrite = false;
    material.depthTest = false;
    fade0.mesh.renderDepth = 1100.0;

    var fade1 = this.fades[1] = world.compose(world, 'overlay-fade-fisheye', {}, uniforms);
    var material = fade1.mesh.material;
    material.blending = THREE.MultiplyBlending;
    material.transparent = true;
    material.depthWrite = false;
    material.depthTest = false;
    fade1.mesh.renderDepth = 1000.0;

    exports.fade = this;
  },

  update: function (world, time, exports) {
    if (this.first) {
      _.each(this.fades, function (fade) { fade.mesh.visible = true });
      this.first = false;
    }
    else {
      _.each(this.fades, function (fade) { fade.mesh.visible = false });
      this.fades[this.preset].mesh.visible = this.visible;
    }

    this.uniforms.opacity.value = this.opacity;
    this.uniforms.aspect.value = exports.aspect;
    this.uniforms.fisheye.value = exports.fisheye;
  },

  resize: function (width, height) {
    this.width = width;
    this.height = height;
  },

});

Acko.EffectList.push(new Acko.Fade());

