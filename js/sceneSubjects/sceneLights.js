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

  const ballLight3 = new THREE.PointLight(0xffaa00, 1, 10);
  ballLight3.castShadow = true;
  scene.add(ballLight3); 

  const ballLight4 = new THREE.PointLight(0xff8800, 1, 10);
  ballLight4.castShadow = true;
  scene.add(ballLight4);

  const ballLight5 = new THREE.PointLight(0xaaaaff, 1, 5);
  ballLight5.castShadow = true;
  scene.add(ballLight5)

  const lights = {
    ballLight2: ballLight2,
    ballLight3: ballLight3,
    ballLight4: ballLight4,
    ballLight5: ballLight5
  }

  return lights;

}