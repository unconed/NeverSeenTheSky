Acko.Audio = function () {
  this.order = -1;
}

Acko.Audio.prototype = _.extend(new Acko.Effect(), {

  build: function (world, assets, exports) {
    window.__taDebug = true;
    var audio = this.source = world
      .audio({
        beats: false,
      }).immediate(assets['cloudburn']);

    audio.seek = 00000;

    var audioTextures = audio.textures(128);

    exports.audio = this;
    exports.source = audio;
    exports.audioTextures = audioTextures;

    this.playing = false;
  },

  update: function (world, time) {
    this.source.play();
  },

});

Acko.EffectList.push(new Acko.Audio());


