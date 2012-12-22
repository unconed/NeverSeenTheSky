Acko.Visualizer = function () {
  this.order = 2;
  this.preset = 0;
}

Acko.Visualizer.prototype = _.extend(new Acko.Effect(), {

  build: function (world, assets, exports) {
    // Particles
    var particleUniforms = this.particleUniforms = {
      pointSize: { type: 'f', value: 2 },
      jitter: { type: 'f', value: 0 },
      vjitter: { type: 'f', value: 0 },
      density: { type: 'f', value: 0 },
      charm: { type: 'f', value: 0 },
      seed: { type: 'f', value: 0 },
      velocity: { type: 'v2', value: new THREE.Vector2(0, 0) },
      mode: { type: 'i', value: 0 },

      center: { type: 'v2', value: new THREE.Vector2(0, 1.0) },
      size: { type: 'v2', value: new THREE.Vector2(.02, 0) },
    };

    var geometry = new THREE.LineGeometry(1, 32);

    var material = new ThreeRTT.ShaderMaterial(exports.field,
                     'vis-vertex-spawn', 'vis-fragment-dot',
                     { texture: exports.field, noise: exports.noiseTexture },
                     particleUniforms);
    material.transparent = true;
    material.blending = THREE.CustomBlending;
    material.blendEquation = THREE.AddEquation;
    material.blendSrc = THREE.OneFactor;
    material.blendDst = THREE.OneFactor;
    material.depthWrite = false;
    material.depthTest = false;
    material.lineWidth = 2;

    var particles = this.particles = new THREE.ParticleSystem(geometry, material);
    particles.renderDepth = 0;
    particles.frustumCulled = false;


    // Line
    var lineUniforms = this.lineUniforms = {
      pointSize: { type: 'f', value: 2 },
      jitter: { type: 'f', value: .1 },
      vjitter: { type: 'f', value: 0 },
      density: { type: 'f', value: 0 },
      charm: { type: 'f', value: 0 },
      seed: { type: 'f', value: 0 },
      velocity: { type: 'v2', value: new THREE.Vector2(0, 0) },
      mode: { type: 'i', value: 0 },

      center: { type: 'v2', value: new THREE.Vector2(0, 1.0) },
      size: { type: 'v2', value: new THREE.Vector2(.02, 0) },
    };

    var geometry2 = new THREE.LineGeometry(1, 32);

    var material2 = new ThreeRTT.ShaderMaterial(
                      exports.field, 'vis-vertex-spawn', 'vis-fragment-line',
                      { texture: exports.field, noise: exports.noiseTexture },
                      lineUniforms);
    material2.transparent = true;
    material2.blending = THREE.CustomBlending;
    material2.blendEquation = THREE.AddEquation;
    material2.blendSrc = THREE.OneFactor;
    material2.blendDst = THREE.OneFactor;
    material2.depthWrite = false;
    material2.depthTest = false;
    material2.lineWidth = 2;

    var line = this.line = new THREE.Line(geometry2, material2);
    line.renderDepth = -1;
    line.frustumCulled = false;

    // Fade out
    var fadeUniforms = this.fadeUniforms = {
      opacity: {
        type: 'f',
        value: 1.0,
      },
      friction: {
        type: 'f',
        value: 1.0,
      },
    };

    var geometry3 = new ThreeRTT.ScreenGeometry();
    var material3 = new ThreeRTT.FragmentMaterial(exports.field, 'vis-fragment-fade', {}, fadeUniforms);
    material3.transparent = true;
    material3.blending = THREE.MultiplyBlending;

    var fade = this.fade = new THREE.Mesh(geometry3, material3);
    fade.renderDepth = -2;
    fade.visible = false;

    // Compel
    var compelUniforms = this.compelUniforms = {
      strength: {
        type: 'f',
        value: 0,
      },
      mode: {
        type: 'i',
        value: 0,
      },
    };

    var geometry4 = new ThreeRTT.ScreenGeometry();
    var material4 = new ThreeAudio.Material(exports.audioTextures, 'generic-vertex-screen', 'vis-fragment-compel', {}, compelUniforms);
    material4.side = THREE.DoubleSide;
    material4.depthTest = false;
    material4.depthWrite = false;
    material4.transparent = true;
    material4.blending = THREE.CustomBlending;
    material4.blendEquation = THREE.AddEquation;
    material4.blendSrc = THREE.OneFactor;
    material4.blendDst = THREE.OneFactor;

    var compel = this.compel = new THREE.Mesh(geometry4, material4);
    compel.frustumCulled = false;
    compel.renderDepth = -3;

    exports.visualizer = this;

    exports.brush.add(particles);
    exports.brush.add(line);
    exports.brush.add(fade);
    exports.brush.add(compel);
  },

  update: function (world, time, exports) {

    var power = function (x) { return x };
    if (this.last) {
      var p = Math.min(3, (time - this.last) * 60);
      power = function (x) { return Math.pow(x, p); }
    }
    this.last = time;

    var preset = this.visible ? this.preset : 0;

    this.particleUniforms.seed.value = Math.random();
    this.lineUniforms.seed.value = Math.random();

    this.particleUniforms.charm.value = 0;
    this.particleUniforms.density.value = 0;
    this.particleUniforms.velocity.value.x = 0;
    this.particleUniforms.velocity.value.y = 0;
    this.particleUniforms.pointSize.value = 2;

    this.lineUniforms.charm.value = 0;
    this.lineUniforms.density.value = 0;
    this.lineUniforms.velocity.value.x = 0;
    this.lineUniforms.velocity.value.y = 0;
    this.lineUniforms.pointSize.value = 2;

    this.fadeUniforms.opacity.value = 1.0;
    this.fadeUniforms.friction.value = 1.0;

    this.compelUniforms.strength.value = 0.0;
    this.compelUniforms.mode.value = 0;

    switch (this.preset) {
      // trail
      case 1:

        this.fadeUniforms.opacity.value = power(.999);
        this.fadeUniforms.friction.value = power(.999);

        this.lineUniforms.mode.value = 0;
        this.lineUniforms.charm.value = Math.random() * .06 - .03;
        this.lineUniforms.density.value = exports.beat ? .05 : 0;
        this.lineUniforms.velocity.value.set(exports.beat ? -.05 : 0, 0);

        this.lineUniforms.jitter.value = .1;
        this.lineUniforms.center.value.set(-1, 0);
        this.lineUniforms.size.value.set(0, .02);

        break;

      // aggressive vortex
      case 2:


        this.fadeUniforms.opacity.value = power(.99);
        this.fadeUniforms.friction.value = power(.999);

        this.lineUniforms.mode.value = 0;
        this.lineUniforms.charm.value = Math.random() * .07 - .034;
        this.lineUniforms.density.value = exports.beat ? .05 : 0;
        this.lineUniforms.velocity.value.set(Math.cos(time*10.66) * exports.beatDecay, Math.sin(time*10.66) * exports.beatDecay);

        this.lineUniforms.jitter.value = .05;
        this.lineUniforms.center.value.set(0, 0);
        this.lineUniforms.size.value.set(.25, .25);

        break;

      // circle
      case 3:


        this.fadeUniforms.opacity.value = power(.99);
        this.fadeUniforms.friction.value = power(.99);

        this.particleUniforms.mode.value = 1;
        this.particleUniforms.pointSize.value = 6;
        this.particleUniforms.charm.value = Math.random() * .5 - .25;
        this.particleUniforms.density.value = exports.beatDecay;
        this.particleUniforms.velocity.value.set((Math.random()*2-1)*exports.beatDecay*2, (Math.random()*2-1)*exports.beatDecay*2);

        this.particleUniforms.jitter.value = 0.02;
        this.particleUniforms.center.value.set(0, 0);
        this.particleUniforms.size.value.set(.3, .3);

        this.lineUniforms.mode.value = 0;
        this.lineUniforms.charm.value = Math.random() * .02 - .01;
        this.lineUniforms.density.value = exports.oddoffDecay*.001;
        this.lineUniforms.velocity.value.set(Math.cos(time*10.66) * exports.oddoffDecay * .02, Math.sin(time*10.66) * exports.beatDecay * .02);

        this.lineUniforms.jitter.value = .04;
        this.lineUniforms.center.value.set(0, 0);
        this.lineUniforms.size.value.set(.02, .02);

        this.compelUniforms.mode.value = 2;
        this.compelUniforms.strength.value = exports.beat * .2;

        break;

      // wind tunnel
      case 4:


        this.fadeUniforms.opacity.value = power(.99);
        this.fadeUniforms.friction.value = power(.98);

        this.particleUniforms.mode.value = 1;
        this.particleUniforms.pointSize.value = 6;
        this.particleUniforms.charm.value = Math.random() * .5 - .25;
        this.particleUniforms.density.value = .3;
        this.particleUniforms.velocity.value.set(0, 0);

        this.particleUniforms.jitter.value = 0.01;
        this.particleUniforms.center.value.set(-.98, 0.1);
        this.particleUniforms.size.value.set(0, 2.8);

        this.compelUniforms.mode.value = 7;
        this.compelUniforms.strength.value = exports.beatDecay * .8;

        break;

      // scope
      case 5:


        this.fadeUniforms.opacity.value = power(.9);
        this.fadeUniforms.friction.value = power(.999);

        this.compelUniforms.mode.value = 4;
        this.compelUniforms.strength.value = .6;

        break;

      // turbulent dots
      case 6:

        this.fadeUniforms.opacity.value = power(.995);
        this.fadeUniforms.friction.value = power(.999);

        this.particleUniforms.pointSize.value = 5;
        this.particleUniforms.mode.value = 0;
        this.particleUniforms.charm.value = Math.random() * .3 - .15;
        this.particleUniforms.density.value = exports.beat ? .7 : 0;
        this.particleUniforms.velocity.value.set((Math.random()*2-1)*exports.beatDecay*2, (Math.random()*2-1)*exports.beatDecay*2);

        this.particleUniforms.jitter.value = 1;
        this.particleUniforms.center.value.set(0, 0);
        this.particleUniforms.size.value.set(0, 0);

        this.compelUniforms.mode.value = 5;
        this.compelUniforms.strength.value = exports.beatDecay;

        break;

      // x waves
      case 7:

        this.fadeUniforms.opacity.value = power(.99);
        this.fadeUniforms.friction.value = power(.99);

        this.particleUniforms.pointSize.value = 5;
        this.particleUniforms.mode.value = 0;
        this.particleUniforms.charm.value = Math.random() * .3 - .15;
        this.particleUniforms.density.value = exports.beatDecay ? .2 : 0;
        this.particleUniforms.velocity.value.set((Math.random()*2-1)*exports.beatDecay*2, (Math.random()*2-1)*exports.beatDecay*2);

        this.particleUniforms.jitter.value = 1;
        this.particleUniforms.center.value.set(0, 0);
        this.particleUniforms.size.value.set(0, 0);

        this.compelUniforms.mode.value = 6;
        this.compelUniforms.strength.value = exports.beatDecay;

        break;

      // y waves
      case 8:

        this.fadeUniforms.opacity.value = power(.99);
        this.fadeUniforms.friction.value = power(.99);

        this.particleUniforms.pointSize.value = 5;
        this.particleUniforms.mode.value = 0;
        this.particleUniforms.charm.value = Math.random() * .3 - .15;
        this.particleUniforms.density.value = exports.beatDecay ? .2 : 0;
        this.particleUniforms.velocity.value.set((Math.random()*2-1)*exports.beatDecay*2, (Math.random()*2-1)*exports.beatDecay*2);

        this.particleUniforms.jitter.value = 1;
        this.particleUniforms.center.value.set(0, 0);
        this.particleUniforms.size.value.set(0, 0);

        this.compelUniforms.mode.value = 6;
        this.compelUniforms.strength.value = exports.beatDecay;

        break;

      // starfish
      case 9:

        this.fadeUniforms.opacity.value = power(.97);
        this.fadeUniforms.friction.value = power(.98);

        this.particleUniforms.pointSize.value = 7;
        this.particleUniforms.mode.value = 0;
        this.particleUniforms.charm.value = Math.random() * .3 - .15;
        this.particleUniforms.density.value = .1;
        this.particleUniforms.velocity.value.set(0, 0);

        this.particleUniforms.jitter.value = .1;
        this.particleUniforms.vjitter.value = .1;
        this.particleUniforms.center.value.set(Math.random()*2-1, Math.random()*2-1);
        this.particleUniforms.size.value.set(0, 0);

        this.compelUniforms.mode.value = 8;
        this.compelUniforms.strength.value = exports.beatDecay * 1.25;

        break;

      // aggressive vortex 2
      case 10:


        this.fadeUniforms.opacity.value = power(.99);
        this.fadeUniforms.friction.value = power(.98);

        var dx = Math.cos(time*1.26);
        var dy = Math.sin(time*1.26);

        this.lineUniforms.mode.value = 0;
        this.lineUniforms.charm.value = Math.random() * .04 - .02;
        this.lineUniforms.density.value = exports.beat ? .05 : 0;
        this.lineUniforms.velocity.value.set(dx * (.2 + exports.oddDecay * .5), dy * (.2 + exports.oddDecay * .5));

        this.lineUniforms.vjitter.value = .02;
        this.lineUniforms.jitter.value = .05;
        this.lineUniforms.center.value.set(dx*.5, dy*.5);
        this.lineUniforms.size.value.set(0, .35);

        this.compelUniforms.mode.value = 5;
        this.compelUniforms.strength.value = .005;

        break;

      // aggressive vortex w/ wind
      case 11:

        this.fadeUniforms.opacity.value = power(.99);
        this.fadeUniforms.friction.value = power(.999);

        this.lineUniforms.mode.value = 0;
        this.lineUniforms.charm.value = Math.random() * .1 - .05;
        this.lineUniforms.density.value = exports.beat ? .05 : 0;
        this.lineUniforms.velocity.value.set(Math.cos(time*10.66) * exports.beatDecay, Math.sin(time*1.66) * exports.beatDecay);

        this.lineUniforms.jitter.value = .05;
        this.lineUniforms.center.value.set(0, -.99);
        this.lineUniforms.size.value.set(.25, .25);

        this.compelUniforms.mode.value = 1;
        this.compelUniforms.strength.value = -.0025;
        break;
      }

    // Auto-rendered by fluid .paint() stage
  },

});

Acko.EffectList.push(new Acko.Visualizer());
