Acko.Demo = function (assets, callback) {

  var that = this;
  window.addEventListener('resize', function () { that.resize(); });

  var that = this;
  setTimeout(function () {
    that.build(assets, callback);
    that.resize();
  }, 0);

}

Acko.Demo.prototype = {

  resize: function () {
    var width = window.innerWidth,
        height = window.innerHeight,
        aspect = width/height;

    if (this.resolution) {
      if (aspect < 16/9) {
        height = Math.floor(width * 9 / 16);
      }
      else {
        width = Math.floor(height / 9 * 16);
      }
      var scale = height / this.resolution;
      aspect = 16/9;
    }

    var el = document.getElementById('holder'),
        s = el.style;
    s.width = width +'px';
    s.height = height +'px';
    s.marginLeft = -width/2 +'px';
    s.marginTop = -height/2 +'px';

    this.exports.aspect = aspect;

    if (this.resolution) {
      // Lock to res
      this.world._tqData._threeBoxContext.elementResize.scale = scale;
      this.world._tqData._threeBoxContext.elementResize.callback();
    }

    _.each(Acko.EffectList, function (effect) {
      effect.resize(width, height);
    });

    if (this.world._cameraControls) {
      this.world._cameraControls.handleResize();
    }
  },

  bench: function () {
    var estimate = Math.sqrt(850 / this.exports.genTime) * 1080;
    var best = 540;
    _.each([ 720, 900, 1080 ], function (res) {
      if (estimate > res) best = res;
    });
    if (window.screen.height < best) {
      best = 0;
    }
    return best;
  },

  build: function (assets, callback) {
    var that = this;

    var options = {
      cameraControls: false,
//      controlClass: THREE.FirstPersonControls,
      orbit: 3,
      theta: 0,
      stats: false,
    };

    Acko.EffectList.sort(function (a, b) {
      return a.order - b.order;
    });

    var element = document.getElementById('holder');
    var world = window.world = this.world = threeBox(element, options);
    var exports = window.exports = this.exports = {};

    _.each(Acko.EffectList, function (effect) {
      effect.build(world, assets, exports);
    });

    this.built = true;

    var last = 0, start = +new Date();
    var time = 0;
    world.loop().hookPreRender(function () {
      time = exports.source.time() / 1000;
//      time = time + 1/60;
      last = time || last;

      _.each(Acko.EffectList, function (effect) {
        effect.update(world, last, exports);
      });
    });

    callback(this.bench());
  },

  go: function (resolution) {
    this.resolution = resolution;
    this.resize();

    if (!this.built) return;
    if (this.playing) return;

    this.playing = true;
    var that = this;
    setTimeout(function () {
      that.world.start();
      setTimeout(function () {
        document.getElementById('back').style.display = 'block';
      }, (5*60+30)*1000);
      setTimeout(function () {
        that.world.stop();
      }, (5*60+30)*1000);
    }, 300);
  },

  stop: function () {
    if (!this.playing) return;
    this.playing = false;
    this.world.stop();
  },

}