Acko.Noise = function () {
  this.order = -1;
}

Acko.Noise.prototype = _.extend(new Acko.Effect(), {

  build: function (world, assets, exports) {
    var random = (function() {
      var seed = 21301;
      return function() {
        // Robert Jenkins' 32 bit integer hash function.
        seed = ((seed + 0x7ed55d16) + (seed << 12))  & 0xffffffff;
        seed = ((seed ^ 0xc761c23c) ^ (seed >>> 19)) & 0xffffffff;
        seed = ((seed + 0x165667b1) + (seed << 5))   & 0xffffffff;
        seed = ((seed + 0xd3a2646c) ^ (seed << 9))   & 0xffffffff;
        seed = ((seed + 0xfd7046c5) + (seed << 3))   & 0xffffffff;
        seed = ((seed ^ 0xb55a4f09) ^ (seed >>> 16)) & 0xffffffff;
        return (seed & 0xfffffff) / 0x10000000;
      };
    })();

    var n = 64;
    var noiseStep = 1/n;

    var canvas = document.createElement('canvas');
    canvas.width = n;
    canvas.height = n;

    noise = new THREE.Texture(canvas);
    noise.minFilter = THREE.NearestFilter;
    noise.magFilter = THREE.NearestFilter;
    noise.wrapS = THREE.RepeatWrapping;
    noise.wrapT = THREE.RepeatWrapping;
    noise.type = THREE.FloatType;
    noise.format = THREE.LuminanceAlphaFormat;

    var ctx = canvas.getContext('2d');
    var data = ctx.getImageData(0, 0, n, n);
    for (var i = 0; i < n*n*4; ++i) {
      data.data[i] = random() * 255.0;
    }
    ctx.putImageData(data, 0, 0);
    noise.needsUpdate = true;

    exports.noise = this;
    exports.noiseTexture = noise;
    exports.noiseStep = noiseStep;
  },

});

Acko.EffectList.push(new Acko.Noise());