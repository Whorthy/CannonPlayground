function SceneSubjects(scene) {

  const sceneLights = SceneLights(scene);
  const sceneMeshes = SceneMeshes(scene);
  const scenePhysics = ScenePhysics(scene);
  
  function updatePhysics(scenePhysics, sceneMeshes) {
    sceneMeshes.sphere.position.copy(scenePhysics.bodySphere.position)
    sceneMeshes.sphere.quaternion.copy(scenePhysics.bodySphere.quaternion)

    scenePhysics.bodyGround.position.copy(sceneMeshes.plane.position)
    scenePhysics.bodyGround.quaternion.copy(sceneMeshes.plane.quaternion)

    scenePhysics.world.step(scenePhysics.timeStep);
  }

  this.update = function () {
    updatePhysics(scenePhysics, sceneMeshes);
  }
}