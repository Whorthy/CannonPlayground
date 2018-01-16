function SceneMeshes(scene) {

  const pi = 3.1415

  const groundGeometry = new THREE.PlaneGeometry(200, 200, 4);
  const groundMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, flatshading: true})
  const plane = new THREE.Mesh(groundGeometry, groundMaterial);
  plane.receiveShadow = true;
  scene.add(plane);
  plane.rotation.x = - (pi / 2);

  const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  /* const sphereMaterial = new THREE.MeshLambertMaterial({color: 0xdd00ff})
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.castShadow = true;
  scene.add(sphere)
  sphere.position.y = 2 */

  const sphere2Material = new THREE.MeshBasicMaterial({color: 0xff0000})
  const sphere2 = new THREE.Mesh(sphereGeometry, sphere2Material);
  sphere2.castShadow = true;
  scene.add(sphere2)

  const sphere3Material = new THREE.MeshBasicMaterial({color: 0xffaa00})
  const sphere3 = new THREE.Mesh(sphereGeometry, sphere3Material);
  sphere3.castShadow = true;
  scene.add(sphere3)

  const sphere4Material = new THREE.MeshBasicMaterial({color: 0xff8800})
  const sphere4 = new THREE.Mesh(sphereGeometry, sphere4Material);
  sphere4.castShadow = true;
  scene.add(sphere4)

  const sphere5Geometry = new THREE.SphereGeometry(0.1, 24, 24);
  const sphere5Material = new THREE.MeshBasicMaterial({color:0xaaaaff})
  const sphere5 = new THREE.Mesh(sphere5Geometry, sphere5Material);
  sphere5.castShadow = true;
  scene.add(sphere5)

  const meshes = {
    plane: plane,
    /* sphere: sphere, */
    sphere2: sphere2,
    sphere3: sphere3,
    sphere4: sphere4,
    sphere5: sphere5
  }

  return meshes;
}