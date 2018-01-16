function SceneLights(scene) {

  /* const generalLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.2);
  scene.add(generalLight); */

 /*  const light1 = new THREE.PointLight(0xffffff, 1, 100);
  scene.add(light1)
  light1.position.y = 5;
  light1.position.x = 3; */

  const ballLight2 = new THREE.PointLight(0xff0000, 1, 10);
  ballLight2.castShadow = true;
  scene.add(ballLight2);

  /* const ballLight3 = new THREE.PointLight(0x0000ff, 1, 10);
  ballLight3.castShadow = true;
  scene.add(ballLight3) */

  const lights = {
    ballLight2: ballLight2
  }

  return lights;

}