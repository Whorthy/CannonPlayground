function SceneMeshes(scene) {

  const pi = 3.1415

  const groundGeometry = new THREE.PlaneGeometry(5, 5, 4);
  const groundMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, flatshading: true})
  const plane = new THREE.Mesh(groundGeometry, groundMaterial);
  scene.add(plane);
  plane.rotation.x = - (pi / 2);

  const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  const sphereMaterial = new THREE.MeshLambertMaterial({color: 0xdd00ff, flatshading: true})
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(sphere)
  sphere.position.y = 2

  const meshes = {
    plane: plane,
    sphere: sphere
  }

  return meshes;
}