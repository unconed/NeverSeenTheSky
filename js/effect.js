Acko.Effect = function () {
  this.visible = true;
  this.order = 0;
}

Acko.Effect.prototype = {

  build: function (world, assets, exports) {

  },

  update: function (world, time) {

  },

  show: function () {
    this.visible = true;
  },

  hide: function () {
    this.visible = false;
  },

  resize: function (width, height) {

  },
}

Acko.EffectList = [];