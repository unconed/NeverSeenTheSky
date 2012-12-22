Acko.Director = function (script, beat) {
  this.script = script;
  this.beat = beat;
  this.tracks = [];

  this.last = 0;
  this.index = 0;
  this.active = true;

  this.order = -3;
}

Acko.Director.prototype = _.extend(new Acko.Effect(), {

  log: function () {
    var out = [], that = this;

    function vector(name, value) {
      out.push('\n ["' + that.lastBeat +'", [' + ([ value.x, value.y, value.z ].join(', ')) +']],');
    }


    var v = new THREE.Vector3();

    v.copy(world._cameraControls.target).multiplyScalar(.1).addSelf(world.tCamera().position);

    vector('camera.position', world.tCamera().position);
    vector('camera.lookAt', v);
    out.push('');

    console.log(out.join("\n"));
  },

  live: function (script) {
    this.script = script;
    this.build(this.world, this.assets, this.exports);
    exports.source.stop().play();
    this.index = exports.source.seek / 1000 * 4.6;
    this.exports.camera.show();
  },

  build: function (world, assets, exports) {
    this.world = world;
    this.assets = assets;
    this.exports = exports;

    var tracks = this.tracks = [];
    var script = this.script;
    var that = this;

    window.freeze = function () {
    //  demo.exports.source.stop();
      demo.exports.director.tracks = [];
      demo.exports.camera.hide();
    }
    window.log = function () { demo.exports.director.log(); }
    window.exports = exports;
    exports.director = this;

    setTimeout(function () {
      _.each(script, function (track) {
        var key = track[0].split(/\./);
        var effect = exports[key[0]];

        if (effect) {
          var type = {
            'hold': Acko.Hold,
            'track': Acko.Track,
          }[track[1]] || Acko.Track;

          // convert beat counts to time
          function convert(time) {
            if (typeof time == 'string') {
              time = time.split(/\./g);
              time = (time[0]||0)*64 + (time[1]||0)*16 + (time[2]||0)*4 + (time[3]||0)*1;
              return that.beat[time];
            }
            return time;
          }

          _.each(track[4], function (stop) {
            stop[0] = convert(stop[0]);
          })

          track[2] = convert(track[2]);
          track[3] = convert(track[3]);

          tracks.push(new type(effect, key[1], track[2], track[3], track[4]));
        }
      });

      exports.bar = 0.0;
      exports.barDecay = 0.0;
      exports.barDecay2 = 0.0;

      exports.oddoff = 0.0;
      exports.oddoffDecay = 0.0;
      exports.oddoffDecay2 = 0.0;

      exports.odd = 0.0;
      exports.oddDecay = 0.0;
      exports.oddDecay2 = 0.0;

      exports.beat = 0.0;
      exports.beatDecay = 0.0;
      exports.beatDecay2 = 0.0;

      exports.tick = 0.0;
      exports.tickDecay = 0.0;
      exports.tickDecay2 = 0.0;
    }, 0);
  },

  update: function (world, time) {
    if (!this.active) return;

    // Fire off beats
    if ((this.index < this.beat.length)
        && (time > this.last)
        && (time > this.beat[this.index])) {

      exports.tick = 1.0;
      exports.oddoff = ((this.index + 4) % 8 == 0) ? 1.0 : 0.0;
      exports.odd = (this.index % 8 == 0) ? 1.0 : 0.0;
      exports.beat = (this.index % 4 == 0) ? 1.0 : 0.0;
      exports.bar = (this.index % 16 == 0) ? 1.0 : 0.0;

      if (exports.bar) {
        var out = [], v = this.index;
        _.loop(4, function (i) {
          out.unshift(i == 3 ? v : v % 4);
          v = Math.floor(v / 4);
        });
//        console.log('beat', out.join('.'));
        this.lastBeat = out.join('.');
      }

      this.index++;
    }
    else if (this.index > 0
        && (time < this.last)
        && (time < this.beat[this.index])) {

      this.index--;

      exports.tick = 1.0;
      exports.odd = ((this.index + 1) % 8 == 0) ? 1.0 : 0.0;
      exports.beat = (this.index % 4 == 0) ? 1.0 : 0.0;
      exports.bar = (this.index % 16 == 0) ? 1.0 : 0.0;
    }
    else {
      exports.tick = exports.beat = 0;
    }

    // Decay values
    exports.tickDecay = exports.tickDecay * .8 + .2 * exports.tick;
    exports.tickDecay2 = exports.tickDecay2 * .8 + .2 * exports.tickDecay;

    exports.oddoffDecay = exports.oddoffDecay * .8 + .2 * exports.oddoff;
    exports.oddoffDecay2 = exports.oddoffDecay2 * .8 + .2 * exports.oddoffDecay;

    exports.oddDecay = exports.oddDecay * .8 + .2 * exports.odd;
    exports.oddDecay2 = exports.oddDecay2 * .8 + .2 * exports.oddDecay;

    exports.beatDecay = exports.beatDecay * .8 + .2 * exports.beat;
    exports.beatDecay2 = exports.beatDecay2 * .8 + .2 * exports.beatDecay;

    exports.barDecay = exports.barDecay * .8 + .2 * exports.bar;
    exports.barDecay2 = exports.barDecay2 * .8 + .2 * exports.barDecay;

    this.last = time;

    // Update tracks
    _.each(this.tracks, function (track) {
      track.update(time);
    });
  },

});

Acko.EffectList.push(new Acko.Director(Acko.Demo.Script, Acko.Demo.Beat));


Acko.Hold = function (effect, key, start, cutoff, stops) {
  this.effect = effect;
  this.key = key;
  this.stops = stops;

  this.start = start;
  this.cutoff = cutoff;

  this.build();
}

Acko.Hold.prototype = {

	update: function (time) {
	  var times = this.times;
	  var values = this.values;

    var n = times.length - 1;
	  var index, f;
	  var max = n;
	  var min = 0;
	  var value;

	  if (this.start) {
	    if (time < this.start) return;
	  }
	  if (this.cutoff) {
	    if (time > this.cutoff) return;
	  }

    // Find right index in curve with binary search
    if (time < times[min]) {
      value = values[0];
    }
    else if (time > times[max]) {
      value = values[values.length - 1];
    }
    else {
      var mid;
      while (max > min) {
    	  mid = Math.floor((max + min) / 2);

    	  if (mid == min) {
    	    max = min;
    	  }
    	  if (mid == max) {
    	    min = max;
    	  }

    	  if (time < times[mid]) {
    	    max = mid;
    	  }
    	  else {
    	    min = mid;
    	  }
      }

      value = values[min];
    }

    function resolve(value) {
      var out;

      switch (typeof value) {
        case 'object':
          if (value instanceof Array) {
            out = [];
            _.loop(value.length, function (i) {
              out.push(resolve(value[i]));
            });
          }
          break;

        case 'boolean':
        case 'number':
        case 'function':
          if (value.call) value = value(time);
          out = value;
          break;
      }

      return out;
    }

    this.effect[this.key] = resolve(value);
    this.last = time;
	},

  build: function () {
    var times = this.times = [];
    var values = this.values = [];

    // Split times from values
    _.each(this.stops, function (stop) {
      times.push(stop[0]);
      values.push(stop[1]);
    });

  },

}



Acko.Track = function (effect, key, start, cutoff, stops) {
  this.effect = effect;
  this.key = key;
  this.stops = stops;
  this.last = -1;

  this.start = start;
  this.cutoff = cutoff;

  this.build();
}

Acko.Track.interpolate = function (p0, p1, p2, p3, t, t2, t3) {

	var v0 = (p2 - p0) * 0.5,
			v1 = (p3 - p1) * 0.5;

	return t3 * ( 2 * (p1 - p2) + v0 + v1)
	     + t2 * (-3 * (p1 - p2) - 2 * v0 - v1)
	     + t  *  v0 + p1;
}

Acko.Track.prototype = {

	update: function (time) {
	  if (this.start) {
	    if (time < this.start) return;
	  }
	  if (this.cutoff) {
	    if (time > this.cutoff) return;
	  }

    var o = this.get(time);
    this.interpolate(time, o[0], o[1]);
	},

  get: function (time) {
	  var times = this.times;
	  var values = this.values;
	  var curve = this.curve;

    var n = curve.length - 1;
	  var index, f;
	  var max = n;
	  var min = 0;

    // Find right index in curve with binary search
    if (time < curve[min][0]) {
      index = 0;
      f = 0;
    }
    else if (time > curve[max][0]) {
      index = values.length - 4;
      f = 1;
    }
    else {
      var mid;
      while ((max - min) > 1) {
    	  mid = Math.floor((max + min) / 2);
    	  if (time < curve[mid][0]) {
    	    max = mid;
    	  }
    	  else {
    	    min = mid;
    	  }
      }

      // Linear interpolate
      var x1 = curve[min][0];
      var x2 = curve[max][0];
      var y1 = curve[min][1];
      var y2 = curve[max][1];
      if ((x2 - x1) == 0) {
        index = min;
        f = 0;
      }
      else {
        var lerptime = (time - x1) / (x2 - x1) * (y2 - y1) + y1;
        index = Math.floor(lerptime);
        f = lerptime - index;
      }
    }

    return [index, f];
  },

  interpolate: function (time, index, fraction) {
	  var values = this.values;

    var p0 = values[index];
    var p1 = values[index+1];
    var p2 = values[index+2];
    var p3 = values[index+3];
    var f2 = fraction*fraction;
    var f3 = f2*fraction;

    function recurse(p0, p1, p2, p3) {
      var out;

      switch (typeof p0) {
        case 'object':
          if (p0 instanceof Array) {
            out = [];
            _.loop(p0.length, function (i) {
              out.push(recurse(p0[i], p1[i], p2[i], p3[i]));
            });
          }
          break;

        case 'number':
        case 'function':
          if (p0.call) p0 = p0(time);
          if (p1.call) p1 = p1(time);
          if (p2.call) p2 = p2(time);
          if (p3.call) p3 = p3(time);

          out = Acko.Track.interpolate(p0, p1, p2, p3, fraction, f2, f3);
          break;
      }

      return out;
    }

    this.effect[this.key] = recurse(p0, p1, p2, p3);
  },

  build: function () {
    var times = this.times = [];
    var values = this.values = [];
    var curve = this.curve = [];

    // Split times from values
    _.each(this.stops, function (stop) {
      times.push(stop[0]);
      values.push(stop[1]);
    });

    // Add first and last point for continuity
    var n = times.length - 1;
    values.push(values[n - 1]);
    values.unshift(values[1]);
    times.push(2*times[n] - times[n - 1]);
    times.unshift(2*times[0] - times[1]);

    // Build time curve
    for (var i = 0; i < n; ++i) {
      var p0 = times[i];
      var p1 = times[i+1];
      var p2 = times[i+2];
      var p3 = times[i+3];

      var f = 0;
      for (var j = 0; j < 16; ++j) {
        var t = j / 16;
        f = Math.min(p2, Math.max(p1, Acko.Track.interpolate(p0, p1, p2, p3, t, t*t, t*t*t)));
        curve.push([f, i+t]);
      }
      if (i == (n - 1)) {
        var t = 1;
        f = Math.min(p2, Math.max(p1, Acko.Track.interpolate(p0, p1, p2, p3, t, t*t, t*t*t)));
        curve.push([f, i+t]);
      }
    }

  },

}