window.Acko = window.Acko || {};

Acko.Loader = function (keys, assets) {
  var that = this;

  that.requirements(function () {
    that.waitFor(keys, function () {
      that.load(assets, function (assets) {

        that.unspin();
        that.hide('#loading');
        that.show('#crunch');

        window.demo = that.demo = new Acko.Demo(assets, function (resolution) {
          document.getElementById('resolution').value = resolution;
          that.show('#ready');
          that.hide('#crunch');
        });

      });
    });

    that.spin();
  });

  that.listen();
};

Acko.Loader.prototype = {

  listen: function () {
    var that = this;
    document.querySelector('button').addEventListener('click', function () {
      that.hide('#front');
      setTimeout(function () {
        var resolution = +document.getElementById('resolution').value;
        that.demo.go(resolution);
      }, 100);
    });
  },

  show: function (sel) {
    var el = document.querySelector(sel);
    el.style.display = 'block';
  },

  hide: function (sel) {
    var el = document.querySelector(sel);
    el.style.display = 'none';
  },

  requirements: function (callback) {
    var el;

    var webgl = !! window.WebGLRenderingContext &&
                !! document.createElement('canvas').getContext('experimental-webgl');
    var webaudio = window.webkitAudioContext;
    if (webgl && webaudio) {

      if (navigator.userAgent.match(/Chrome/)) {
        if (window.innerWidth < (window.screen.width - 100)) {
          var sel = navigator.userAgent.match(/Mac OS X/) ? '#macchrome' : '#maximize';
          this.show(sel);
        }
      }

      callback();
    }
    else {
      this.show('#browser');
      this.hide('#loading');
    }
  },

  spin: function () {
    var el = document.querySelector('.spin');
    var t = 0;
    function spin() {
      t = t + 18;
      var tr = 'rotate('+ t +'deg)';
      el.style.WebkitTransform = tr;
      el.style.MozTransform = tr;
      el.style.OTransform = tr;
      el.style.transform = tr;
    }

    this.spinning = true;
    var that = this;

    var raf = window.requestAnimationFrame
           || window.webkitRequestAnimationFrame
           || window.mozRequestAnimationFrame;
    raf && raf(function loop() {
      if (that.spinning) {
        raf(loop);
      }
      spin();
    });
  },

  unspin: function () {
    this.spinning = false;
  },

  waitFor: function (keys, callback) {
    var that = this;
    var interval = setInterval(function () {
      var found = true;

      for (i in keys) (function (key) {
        if (!window[key]) found = false;
      })(keys[i]);

      if (found) {
        clearInterval(interval);
        callback();
      }
    }, 100);
  },

  load: function (assets, callback) {
    var that = this;
    setTimeout(function () {
      ThreeBox.preload(assets, function (assets) {
        callback(assets);
      });
    }, 0);
  },
};
