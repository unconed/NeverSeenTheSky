Acko.Text = function () {
  this.order = 4;
}

Acko.Text.prototype = _.extend(new Acko.Effect(), {

  build: function (world, assets, exports) {
    var texture = assets['text'];

    var geometry = new THREE.PlaneGeometry(2.15, 1, 1, 1);

    var material = new THREE.MeshBasicMaterial({ map: texture, color: 0xffffff });
    material.transparent = true;
    material.depthWrite = false;
    material.depthTest = true;

    var text = this.text = new THREE.Mesh(geometry, material);
    text.renderDepth = 1e6;
    text.scale.set(20, 20, 20);
    text.position.set(0, 40, 0);
    tQuery(text).addTo(world);

    exports.text = this;
  },

  update: function (world, time, exports) {
    this.text.visible = this.visible;
  },

});

Acko.EffectList.push(new Acko.Text());
