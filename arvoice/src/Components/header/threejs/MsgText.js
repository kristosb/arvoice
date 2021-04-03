import * as THREE from 'three'
import hfont from "../../../assets/helvetiker_regular.typeface.json";
//import hfont from './helvetiker_regular.typeface.json';
//import helveticaRegular from './../../fonts/helvetiker_regular.typeface.json';

export default function scene(scene, camera) {   
    const textGroup = new THREE.Group();
    const loader = new THREE.FontLoader();
    var currentPositionY = 0;
    var posOffsetY = -1.4;
    const maxLines = 3;
    function textAdd(txt){
 
        var font = loader.parse(hfont); 
        var textGeometry = new THREE.TextGeometry( txt, { font: font, size: 1, height: 0.01, curveSegments: 20 } );
        var textMaterial = new THREE.MeshBasicMaterial( { 
            color: 0xFFFFFF,
            transparent: true,
            opacity: 0.9,
            side: THREE.DoubleSide
        } ); 
        var textMesh = new THREE.Mesh( textGeometry, textMaterial ); 
        textMesh.rotation.y = 3.14;
        textMesh.position.z = - 5;
        textMesh.position.y = 2;
        textMesh.position.x = 5;
        
        textGroup.children.map(x=>{x.geometry.translate(0,posOffsetY,0);x.material.opacity = 0.4;});
        textGroup.add(textMesh);
        if (textGroup.children.length > maxLines) {
            var bottomLine = textGroup.children[0];
            textGroup.remove(bottomLine);
        }

    }
    textAdd("hello how are you");
    scene.add(textGroup);
    camera.add(textGroup);
    function update(time) {

    }

    return {
        update,
        textAdd
    }

}