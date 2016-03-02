/// <reference path="_reference.ts"/>

// MAIN GAME FILE

// THREEJS Aliases
import Scene = THREE.Scene;
import Renderer = THREE.WebGLRenderer;
import PerspectiveCamera = THREE.PerspectiveCamera;
import BoxGeometry = THREE.BoxGeometry;
import CubeGeometry = THREE.CubeGeometry;
import PlaneGeometry = THREE.PlaneGeometry;
import SphereGeometry = THREE.SphereGeometry;
import Geometry = THREE.Geometry;
import AxisHelper = THREE.AxisHelper;
import LambertMaterial = THREE.MeshLambertMaterial;
import MeshBasicMaterial = THREE.MeshBasicMaterial;
import Material = THREE.Material;
import Mesh = THREE.Mesh;
import Object3D = THREE.Object3D;
import SpotLight = THREE.SpotLight;
import PointLight = THREE.PointLight;
import AmbientLight = THREE.AmbientLight;
import Control = objects.Control;
import GUI = dat.GUI;
import Color = THREE.Color;
import Vector3 = THREE.Vector3;
import Face3 = THREE.Face3;
import Point = objects.Point;
import CScreen = config.Screen;

//Custom Game Objects
import gameObject = objects.gameObject;

// setup an IIFE structure (Immediately Invoked Function Expression)
var game = (() => {

    // declare game objects
    var scene: Scene = new Scene();
    var renderer: Renderer;
    var camera: PerspectiveCamera;
    var control: Control;
    var gui: GUI;
    var stats: Stats;
    
    var axes: AxisHelper;
    
var cubeOnecubeGeometry: CubeGeometry;
var cubeTwocubeGeometry: CubeGeometry;
var cubeThreecubeGeometry: CubeGeometry;
var cubeFourcubeGeometry: CubeGeometry;
var cubeFivecubeGeometry: CubeGeometry;

var cubeOnecubeMaterial: LambertMaterial;
var cubeTwocubeMaterial: LambertMaterial;
var cubeThreecubeMaterial: LambertMaterial;
var cubeFourcubeMaterial: LambertMaterial;
var cubeFivecubeMaterial: LambertMaterial;

var cubeOne:Mesh;
var ubeTwo:Mesh;
var cubeThree:Mesh;
var cubeFour:Mesh;
var cubeFive:Mesh;

var planeMaterial: LambertMaterial;
var planeGeometry: PlaneGeometry;
var plane: Mesh;

var ambientLight: AmbientLight;
var spotLight: SpotLight;

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
 	planeGeometry = new PlaneGeometry(60,30);
	planeMaterial = new LambertMaterial({color:0xFFFFFF});
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
    spotLight = new SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow = true;
    scene.add(spotLight);
    console.log("Added a SpotLight Light to Scene");
    
    cubeOnecubeGeometry = new CubeGeometry(8,4, 8);
    cubeOnecubeMaterial = new LambertMaterial({color:0xeeb2f7});
    cubeOne = new Mesh(cubeOnecubeGeometry, cubeOnecubeMaterial);
    cubeOne.castShadow = true;
    cubeOne.receiveShadow = true;
    
    cubeOne.position.set(0,0,0);
    
    scene.add(cubeOne);
    console.log("Added cubeOne to the scene");
 
        // add controls
        gui = new GUI();
        control = new Control();
        addControl(control);

        // Add framerate stats
        addStatsObject();
        console.log("Added Stats to scene...");

        document.body.appendChild(renderer.domElement);
        gameLoop(); // render the scene	

    }

    function addControl(controlObject: Control): void {
        /* ENTER CODE for the GUI CONTROL HERE */
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
    function gameLoop(): void {
        stats.update();
        
        // render using requestAnimationFrame
        requestAnimationFrame(gameLoop);
	
        // render the scene
        renderer.render(scene, camera);
    }

    // Setup default renderer
    function setupRenderer(): void {
        renderer = new Renderer();
        renderer.setClearColor(0x404040, 1.0);
        renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
        //renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        console.log("Finished setting up Renderer...");
    }

    // Setup main camera for the scene
    function setupCamera(): void {
        camera = new PerspectiveCamera(35, config.Screen.RATIO, 0.1, 100);
        camera.position.x = 15.3;
        camera.position.y = 18.5;
        camera.position.z = -28.7;
        camera.rotation.set(-1.10305, 0.49742, -0.1396);
        camera.lookAt(new Vector3(0, 0, 0));
        console.log("Finished setting up Camera...");
    }

    window.onload = init;

    return {
        scene: scene
    }

})();


