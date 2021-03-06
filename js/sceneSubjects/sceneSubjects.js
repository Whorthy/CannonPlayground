function SceneSubjects(scene) {

  const sceneLights = SceneLights(scene);
  const sceneMeshes = SceneMeshes(scene);
  const scenePhysics = ScenePhysics(scene);
  
  function updatePhysics(scenePhysics, sceneMeshes) {
    /* sceneMeshes.sphere.position.copy(scenePhysics.bodySphere.position)
    sceneMeshes.sphere.quaternion.copy(scenePhysics.bodySphere.quaternion) */

    sceneMeshes.sphere2.position.copy(scenePhysics.bodySphere2.position)
    sceneMeshes.sphere2.quaternion.copy(scenePhysics.bodySphere2.quaternion)
    sceneLights.ballLight2.position.copy(scenePhysics.bodySphere2.position)

    sceneMeshes.sphere3.position.copy(scenePhysics.bodySphere3.position)
    sceneMeshes.sphere3.quaternion.copy(scenePhysics.bodySphere3.quaternion)
    sceneLights.ballLight3.position.copy(scenePhysics.bodySphere3.position)

    sceneMeshes.sphere4.position.copy(scenePhysics.bodySphere4.position)
    sceneMeshes.sphere4.quaternion.copy(scenePhysics.bodySphere4.quaternion)
    sceneLights.ballLight4.position.copy(scenePhysics.bodySphere4.position)

    sceneMeshes.sphere5.position.copy(scenePhysics.bodySphere5.position)
    sceneMeshes.sphere5.quaternion.copy(scenePhysics.bodySphere5.quaternion)
    sceneLights.ballLight5.position.copy(scenePhysics.bodySphere5.position)

    scenePhysics.bodyGround.position.copy(sceneMeshes.plane.position)
    scenePhysics.bodyGround.quaternion.copy(sceneMeshes.plane.quaternion)

    scenePhysics.world.step(scenePhysics.timeStep);
  }

  this.update = function () {
    updatePhysics(scenePhysics, sceneMeshes);
  }
}