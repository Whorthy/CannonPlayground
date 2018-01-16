function SceneLights(scene) {

  /* const generalLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.2);
  scene.add(generalLight); */

 /*  const light1 = new THREE.PointLight(0xffffff, 1, 100);
  scene.add(light1)
  light1.position.y = 5;
  light1.position.x = 3; */

  const ballLight1 = new THREE.PointLight(0xff0000, 1, 10);
  ballLight1.castShadow = true;
  scene.add(ballLight1);

  const lights = {

    
    ballLight1: ballLight1
  }

  return lights;

}