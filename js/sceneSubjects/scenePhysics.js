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


  /* const bodySphere = new CANNON.Body({
    mass: 5,
    position: new CANNON.Vec3(0,4,0.1), 
    shape: new CANNON.Sphere(0.5)
  })
  world.addBody(bodySphere); */

  const bodySphere2 = new CANNON.Body({
    mass: 5,
    position: new CANNON.Vec3(0,6,0),
    shape: new CANNON.Sphere(0.5),
    linearDamping: 0.3,
    angularDamping: 0.3
  })
  world.addBody(bodySphere2);

  const bodySphere3 = new CANNON.Body({
    mass: 5,
    position: new CANNON.Vec3(0,4,-.1),
    shape: new CANNON.Sphere(0.5),
    linearDamping: 0.3,
    angularDamping: 0.3
  })
  world.addBody(bodySphere3)

  const bodySphere4 = new CANNON.Body({
    mass: 5,
    position: new CANNON.Vec3(.1,8,0),
    shape: new CANNON.Sphere(0.5),
    linearDamping: 0.3,
    angularDamping: 0.3
  })
  world.addBody(bodySphere4)

  const bodySphere5 = new CANNON.Body({
    mass: 5,
    position: new CANNON.Vec3(0,24,0.4),
    shape: new CANNON.Sphere(0.1),
    linearDamping: 0.5,
    angularDamping: 0.5
  })
  world.addBody(bodySphere5);

  //bodySphere2.linearDamping = bodySphere2.angularDamping = 0.5


  const physics = {
    world: world,
    timeStep: timeStep,
    /* bodySphere: bodySphere, */
    bodySphere2: bodySphere2,
    bodySphere3: bodySphere3,
    bodySphere4: bodySphere4,
    bodySphere5: bodySphere5,
    bodyGround: bodyGround
  }

  return physics;

}