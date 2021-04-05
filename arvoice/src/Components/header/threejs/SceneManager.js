import * as THREE from 'three';
//import SceneSubject from './SceneSubject';
import MsgText from './MsgText';
import GeneralLights from './GeneralLights';
import Speach from '../Speach';
import { VRButton } from 'three/examples/jsm/webxr/VRButton';
//import { VoiceButton } from './VoiceButton';
export default function canvas(canvas)  {

    const clock = new THREE.Clock();
    const origin = new THREE.Vector3(0,0,0);

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }
    //console.log(screenDimensions);
    const mousePosition = {
        x: 0,
        y: 0
    }

    const scene = buildScene();
    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const sceneSubjects = createSceneSubjects(scene, camera);

    /*var geometry = new THREE.BoxGeometry(1,1,1);
    var material = new THREE.MeshBasicMaterial({color: 0xff0000});
    var cube = new THREE.Mesh(geometry,material);
    scene.add(cube);
    camera.add(cube);
    //camera.add(sceneSubjects[1]);
    cube.position.set(0, 0, -10);*/
    scene.add(camera);
    //updatePositionForCamera(camera, cube);

    window.addEventListener("keypress", onKeyPress);
    const spechToText = new Speach();
    onSpeach();
    //msgTextAdd("press 1 and \n speak");

    function buildScene() {
        const scene = new THREE.Scene();
        //scene.background = new THREE.Color("#FFF");
        scene.background = new THREE.Color('black');

        return scene;
    }

    function buildRender({ width, height }) {
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); 
        renderer.xr.enabled = true;
        const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);

        renderer.gammaInput = true;
        renderer.gammaOutput = true; 
        
        return renderer;
    }

    function buildCamera({ width, height }) {
        const aspectRatio = width / height;
        const fieldOfView = 75;
        const nearPlane = 0.1;
        const farPlane = 80; 
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

        //camera.position.z = 40;
        camera.position.set(0, 0, 0);

        return camera;
    }

    function createSceneSubjects(scene, camera) {
        const sceneSubjects = [
            new GeneralLights(scene),
            //new MsgText(scene,camera)
            //new SceneSubject(scene),
        ];
        const sceneOsd= [
            new MsgText(scene,camera),
        ];
        sceneOsd[0].positionSet(3,1,-8);
        return sceneSubjects.concat(sceneOsd);
    }


    function update() {
        const elapsedTime = clock.getElapsedTime();

        for(let i=0; i<sceneSubjects.length; i++)
            sceneSubjects[i].update(elapsedTime);
        //sceneSubjects[2].textAdd("world");
        //updateCameraPositionRelativeToMouse();
        //updatePositionForCamera(camera, cube);
        renderer.render(scene, camera);
    }
    function onKeyPress(ev) {
        let keycode = ev.which;
        if (
          (keycode >= 48 && keycode <= 57) ||
          (keycode >= 97 && keycode <= 122) ||
          (keycode >= 65 && keycode <= 90)
        ) {
          //this.addLetter(ev.key);
          if(keycode == 49) {
            //spechToText.getText();
            spechToText.start();
          }else{
            msgTextAdd("key= "+ev.key);
          }
        }
      }
    function speachStart(){
        spechToText.start();
    }
    //enable event, on ready send data to msgtext
    function onSpeach(){
        spechToText.on("ready",x=> msgTextAdd(x));     
    }
    function msgTextAdd(x){
        sceneSubjects[1].textAdd(x);
    }
    /*function updateCameraPositionRelativeToMouse() {
        camera.position.x += (  (mousePosition.x * 0.01) - camera.position.x ) * 0.01;
        camera.position.y += ( -(mousePosition.y * 0.01) - camera.position.y ) * 0.01;
        camera.lookAt(origin);
    }*/

    function onWindowResize() {
        const { width, height } = canvas;
        
        screenDimensions.width = width;
        screenDimensions.height = height;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }

    /*function onMouseMove(x, y) {
        mousePosition.x = x;
        mousePosition.y = y;
    }*/

    function vrButtonGet()
    {
        return VRButton.createButton( renderer );
    }
    function vrRender(ren){
        renderer.setAnimationLoop(ren);
    }

    /*/function startVoiceGet(){
        return VoiceButton.createButton( renderer );
    }*/
    return {
        update,
        onWindowResize,
        //onMouseMove,
        vrButtonGet,
        vrRender,
        speachStart
        //startVoiceGet
    }
}