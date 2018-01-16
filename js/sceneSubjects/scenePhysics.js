function ScenePhysics(scene) {

  const world = new CANNON.World();
  const timeStep = 1/60
  world.gravity.set(0, -9.81, 0);
  world.broadphase = new CANNON.NaiveBroadphase();

  const bodyGround = new CANNON.Body({
    mass:0,
    shape: new CANNON.Plane()
  })
  world.addBody(bodyGround)


  const bodySphere = new CANNON.Body({
    mass: 5,
    position: new CANNON.Vec3(0,4,0), 
    shape: new CANNON.Sphere(0.5)
  })
  world.addBody(bodySphere);

  const bodySphere2 = new CANNON.Body({
    mass: 5,
    position: new CANNON.Vec3(0,6,.1),
    shape: new CANNON.Sphere(0.5)
  })
  world.addBody(bodySphere2);

  const bodySphere3 = new CANNON.Body({
    mass: 5,
    position: new CANNON.Vec3(0,2,-.1),
    shape: new CANNON.Sphere(0.5)
  })
  world.addBody(bodySphere3)

  const bodySphere4 = new CANNON.Body({
    mass: 5,
    position: new CANNON.Vec3(.1,8,0),
    shape: new CANNON.Sphere(0.5)
  })
  world.addBody(bodySphere4)

  const physics = {
    world: world,
    timeStep: timeStep,
    bodySphere: bodySphere,
    bodySphere2: bodySphere2,
    bodySphere3: bodySphere3,
    bodySphere4: bodySphere4,
    bodyGround: bodyGround
  }

  return physics;

}