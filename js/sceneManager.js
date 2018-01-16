function SceneManager(canvas) {

  const screenDimensions = {
    width: canvas.width,
    height: canvas.height
  }

  const stats = new Stats();
  stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
  document.body.appendChild( stats.dom );

  const scene = buildScene();
  const renderer = buildRenderer(screenDimensions);
  const camera = buildCamera(screenDimensions);
  const sceneSubjects = createSceneSubjects(scene);
  const controls = createControls(camera);

  function buildScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#000");

    return scene;
  }

  function buildRenderer({width, height}) {
    const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true, alpha: true});
    const DPR =  1;
    renderer.setPixelRatio(DPR);
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true; 
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    return renderer;
  }

  function buildCamera({width, height}) {
    const aspectRatio = width / height;
    const fieldOfView = 60;
    const nearPlane = 0.1;
    const farPlane = 1000;
    const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
    camera.position.z = 10;
    camera.position.y = 3

    return camera;
  }

  function createSceneSubjects(scene) {
    const sceneSubjects = new SceneSubjects(scene);

    return sceneSubjects
  }

  function createControls(camera) {
    const controls = new THREE.OrbitControls(camera);

    return controls;
  }

  this.update = function() {
    renderer.render(scene, camera);
    controls.update();
    sceneSubjects.update();
    stats.begin();
    stats.end();
  }

  this.onWindowResize = function () {
    const {width, height} = canvas;

    screenDimensions.width = width;
    screenDimensions.height = height;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
  }

}