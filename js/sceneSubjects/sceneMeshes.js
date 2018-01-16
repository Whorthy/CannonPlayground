function SceneMeshes(scene) {

  const pi = 3.1415

  const groundGeometry = new THREE.PlaneGeometry(8, 8, 4);
  const groundMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, flatshading: true})
  const plane = new THREE.Mesh(groundGeometry, groundMaterial);
  scene.add(plane);
  plane.rotation.x = - (pi / 2);

  const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  const sphereMaterial = new THREE.MeshLambertMaterial({color: 0xdd00ff, flatshading: true})
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(sphere)
  sphere.position.y = 2

  const sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(sphere2)
  sphere.position.y = 4

  const sphere3 = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(sphere3)

  const sphere4 = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(sphere4)
  sphere.position.y = 6

  const meshes = {
    plane: plane,
    sphere: sphere,
    sphere2: sphere2,
    sphere3: sphere3,
    sphere4: sphere4
  }

  return meshes;
}