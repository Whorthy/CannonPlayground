function ScenePhysics(scene) {

  const world = new CANNON.World();
  const timeStep = 1/60
  world.gravity.set(0, -9.81, 0);
  world.broadphase = new CANNON.NaiveBroadphase();

  var bodyGround = new CANNON.Body({
    mass:0,
    shape: new CANNON.Plane()
  })
  world.addBody(bodyGround)


  var bodySphere = new CANNON.Body({
    mass: 5,
    position: new CANNON.Vec3(0,4,0), 
    shape: new CANNON.Sphere(0.5)
  })
  world.addBody(bodySphere);

  const physics = {
    world: world,
    timeStep: timeStep,
    bodySphere: bodySphere,
    bodyGround: bodyGround
  }

  return physics;

}