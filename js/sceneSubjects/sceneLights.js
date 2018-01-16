function SceneLights(scene) {

  const generalLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.2);
  scene.add(generalLight);

  const light1 = new THREE.PointLight(0xffffff, 1, 100);
  scene.add(light1)
  light1.position.y = 5;
  light1.position.x = 3;

}