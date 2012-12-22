Acko.Camera = function () {
  this.position = [.5, 0, 0];
  this.lookAt = [0, 0, 0];
  this.fov = 45;
  this.fisheye = 0;
  this.orbit = 0;

  this.visible = true;
  this.v = new THREE.Vector3();

  this.order = -2;
}

Acko.Camera.prototype = _.extend(new Acko.Effect(), {

  build: function (world, assets, exports) {
    exports.camera = this;
    var camera = world.tCamera();

    // orbiting rig
    this.transback = new THREE.Object3D();
    this.back = new THREE.Object3D();
    this.rotate = new THREE.Object3D();
    this.forward = new THREE.Object3D();
    this.transforward = new THREE.Object3D();

    this.transforward.add(camera);
    this.forward.add(this.transforward);
    this.rotate.add(this.forward);
    this.back.add(this.rotate);
    this.transback.add(this.back);

    world.tScene().add(this.transback);

    this.transback.position.set(0, -200, 0);

    this.back.eulerOrder = 'ZXY';
    this.back.rotation.set(.3, 1.2, 0.624);

    this.rotate.rotation.set(0, 0, 0);

    this.forward.eulerOrder = 'YXZ';
    this.forward.rotation.set(-.3, -1.2, -0.624);

    this.transforward.position.set(0, 200, 0);

    exports.rig = this.transforward;
  },

  update: function (world, time, exports) {
    var camera = world.tCamera();

    if (this.visible) {
      this.v.set.apply(this.v, this.lookAt);

      exports.fisheye = this.fisheye;
      camera.fov = this.fov;
      camera.position.set.apply(camera.position, this.position);
      camera.lookAt(this.v);

      this.rotate.rotation.y = this.orbit;

      camera.matrixWorldNeedsUpdate = true;
      camera.updateMatrixWorld();
      camera.updateProjectionMatrix();
    }
    else {
      //exports.fisheye = 0.0;
    }
  },

});

Acko.EffectList.push(new Acko.Camera());
