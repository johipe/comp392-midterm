/// <reference path="_reference.ts"/>
// MAIN GAME FILE
// THREEJS Aliases
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var BoxGeometry = THREE.BoxGeometry;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var SphereGeometry = THREE.SphereGeometry;
var Geometry = THREE.Geometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var MeshBasicMaterial = THREE.MeshBasicMaterial;
var Material = THREE.Material;
var Mesh = THREE.Mesh;
var Object3D = THREE.Object3D;
var SpotLight = THREE.SpotLight;
var PointLight = THREE.PointLight;
var AmbientLight = THREE.AmbientLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var Vector3 = THREE.Vector3;
var Face3 = THREE.Face3;
var Point = objects.Point;
var CScreen = config.Screen;
//Custom Game Objects
var gameObject = objects.gameObject;
// setup an IIFE structure (Immediately Invoked Function Expression)
var game = (function () {
    // declare game objects
    var scene = new Scene();
    var renderer;
    var camera;
    var control;
    var gui;
    var stats;
    var axes;
    var cubeOnecubeGeometry;
    var cubeTwocubeGeometry;
    var cubeThreecubeGeometry;
    var cubeFourcubeGeometry;
    var cubeFivecubeGeometry;
    var cubeOnecubeMaterial;
    var cubeTwocubeMaterial;
    var cubeThreecubeMaterial;
    var cubeFourcubeMaterial;
    var cubeFivecubeMaterial;
    var cubeOne;
    var cubeTwo;
    var cubeThree;
    var cubeFour;
    var cubeFive;
    var planeMaterial;
    var planeGeometry;
    var plane;
    var ambientLight;
    var spotLight;
    var colorcubeOne;
    function init() {
        // Instantiate a new Scene object
        scene = new Scene();
        setupRenderer(); // setup the default renderer
        setupCamera(); // setup the camera
        /* ENTER CODE HERE */
        axes = new AxisHelper(15);
        scene.add(axes);
        console.log("Added Axis Helper to scene...");
        //Add a Plane to the Scene
        planeGeometry = new PlaneGeometry(60, 30);
        planeMaterial = new LambertMaterial({ color: 0xFFFFFF });
        plane = new Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 15;
        plane.position.y = 0;
        plane.position.z = 0;
        scene.add(plane);
        console.log("Added Plane Primitive to scene...");
        // Add an AmbientLight to the scene
        ambientLight = new AmbientLight(0x090909);
        scene.add(ambientLight);
        console.log("Added an Ambient Light to Scene");
        // Add a SpotLight to the scene
        spotLight = new SpotLight(0xfcfcfc);
        camera.position.x = 15.3;
        camera.position.y = 28.5;
        camera.position.z = -28.7;
        // spotLight.position.set(40, 20, 10);
        spotLight.position.set(15, 28, -28.7);
        spotLight.castShadow = true;
        scene.add(spotLight);
        console.log("Added a SpotLight Light to Scene2");
        colorcubeOne = '#' + Math.random().toString(16).substring(2, 8);
        cubeOnecubeGeometry = new CubeGeometry(14, 4, 14);
        //cubeOnecubeMaterial = new LambertMaterial({color:0xeeb2f7});
        cubeOnecubeMaterial = new LambertMaterial({ color: colorcubeOne });
        cubeOne = new Mesh(cubeOnecubeGeometry, cubeOnecubeMaterial);
        cubeOne.castShadow = true;
        cubeOne.receiveShadow = true;
        cubeOne.position.set(0, 0, 0);
        scene.add(cubeOne);
        console.log("Added cubeOne to the scene");
        cubeTwocubeGeometry = new CubeGeometry(10, 2, 10);
        cubeTwocubeMaterial = new LambertMaterial({ color: 0xeeb2f7 });
        cubeTwo = new Mesh(cubeTwocubeGeometry, cubeTwocubeMaterial);
        cubeTwo.castShadow = true;
        cubeTwo.receiveShadow = true;
        cubeTwo.position.set(0, 4, 0);
        scene.add(cubeTwo);
        console.log("Added cubeTwo to the scene");
        cubeThreecubeGeometry = new CubeGeometry(8, 2, 8);
        cubeThreecubeMaterial = new LambertMaterial({ color: 0xeeb2f7 });
        cubeThree = new Mesh(cubeThreecubeGeometry, cubeThreecubeMaterial);
        cubeThree.castShadow = true;
        cubeThree.receiveShadow = true;
        cubeThree.position.set(0, 6, 0);
        scene.add(cubeThree);
        console.log("Added cubeThree to the scene");
        cubeFourcubeGeometry = new CubeGeometry(6, 2, 6);
        cubeFourcubeMaterial = new LambertMaterial({ color: 0xeeb2f7 });
        cubeFour = new Mesh(cubeFourcubeGeometry, cubeFourcubeMaterial);
        cubeFour.castShadow = true;
        cubeFour.receiveShadow = true;
        cubeFour.position.set(0, 8, 0);
        scene.add(cubeFour);
        console.log("Added cubeFour to the scene");
        cubeFivecubeGeometry = new CubeGeometry(4, 2, 4);
        cubeFivecubeMaterial = new LambertMaterial({ color: 0xeeb2f7 });
        cubeFive = new Mesh(cubeFivecubeGeometry, cubeFivecubeMaterial);
        cubeFive.castShadow = true;
        cubeFive.receiveShadow = true;
        cubeFive.position.set(0, 10, 0);
        scene.add(cubeFive);
        console.log("Added cubeFive to the scene");
        // add controls
        gui = new GUI();
        control = new Control(0, 0, 0, 0, 0);
        addControl(control);
        // Add framerate stats
        addStatsObject();
        console.log("Added Stats to scene...");
        document.body.appendChild(renderer.domElement);
        gameLoop(); // render the scene	
    }
    function addControl(controlObject) {
        /* ENTER CODE for the GUI CONTROL HERE */
        var rotationFolder = gui.addFolder('Rotation Control');
        rotationFolder.add(controlObject, 'cubeOne_rotationSpeed', 0, 0.5).listen();
        rotationFolder.add(controlObject, 'cubeTwo_rotationSpeed', 0, 0.5).listen();
        rotationFolder.add(controlObject, 'cubeThree_rotationSpeed', 0, 0.5).listen();
        rotationFolder.add(controlObject, 'cubeFour_rotationSpeed', 0, 0.5).listen();
        rotationFolder.add(controlObject, 'cubeFive_rotationSpeed', 0, 0.5).listen();
        // rotationFolder.add(controlObject, 'resetRotation').name('Reset ');
        rotationFolder.open();
    }
    function addStatsObject() {
        stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
    }
    // Setup main game loop
    function gameLoop() {
        stats.update();
        cubeOne.rotation.y += control.cubeOne_rotationSpeed;
        cubeTwo.rotation.y += control.cubeTwo_rotationSpeed;
        cubeThree.rotation.y += control.cubeThree_rotationSpeed;
        cubeFour.rotation.y += control.cubeFour_rotationSpeed;
        cubeFive.rotation.y += control.cubeFive_rotationSpeed;
        // render using requestAnimationFrame
        requestAnimationFrame(gameLoop);
        // render the scene
        renderer.render(scene, camera);
    }
    // Setup default renderer
    function setupRenderer() {
        renderer = new Renderer();
        renderer.setClearColor(0x404040, 1.0);
        renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
        //renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        console.log("Finished setting up Renderer...");
    }
    // Setup main camera for the scene
    function setupCamera() {
        camera = new PerspectiveCamera(35, config.Screen.RATIO, 0.1, 100);
        camera.position.x = 15.3;
        camera.position.y = 28.5;
        camera.position.z = -28.7;
        camera.rotation.set(-1.10305, 0.49742, -0.1396);
        camera.lookAt(new Vector3(0, 0, 0));
        console.log("Finished setting up Camera...");
    }
    window.onload = init;
    return {
        scene: scene
    };
})();
//# sourceMappingURL=game.js.map