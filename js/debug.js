Acko.Debug = function () {
  this.visible = true;
  this.order = 999;
}

Acko.Debug.prototype = _.extend(new Acko.Effect(), {

  build: function (world, assets, exports) {
    var compose = world.compose(exports.field, 'cfd-debug');
    compose.mesh.material.blending = THREE.NormalBlending;
    compose.mesh.material.transparent = true;
    compose.mesh.material.depthTest = false;
    compose.mesh.material.depthWrite = false;
    compose.mesh.renderDepth = -1e8;
  },

  update: function (world, time) {

  },

});

Acko.EffectList.push(new Acko.Debug());