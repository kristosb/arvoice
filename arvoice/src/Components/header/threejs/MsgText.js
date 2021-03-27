import * as THREE from 'three'
import hfont from "../../../assets/helvetiker_regular.typeface.json";



export default function scene(scene) {   
    const textGroup = new THREE.Group();
    const loader = new THREE.FontLoader();
    var currentPositionY = 0;
    var posOffsetY = -5;
    const maxLines = 3;
    function textAdd(txt){
        loader.load( 'helvetiker_regular.typeface.json', function ( font ) {

            const color = 0xFFFFFF;//0x006699;

            const matDark = new THREE.LineBasicMaterial( {
                color: color,
                side: THREE.DoubleSide
            } );

            const matLite = new THREE.MeshBasicMaterial( {
                color: color,
                transparent: true,
                opacity: 0.9,
                side: THREE.DoubleSide
            } );

            //txt = txt.splice(6,0,"\n\r")
            const message = txt;//"   Three.js\nSimple text.";

            const shapes = font.generateShapes( message, 5 );

            const geometry = new THREE.ShapeGeometry( shapes );

            geometry.computeBoundingBox();

            const xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );

            //geometry.translate( xMid, currentPositionY, 0 );
            
            // make shape ( N.B. edge view not visible )

            const text = new THREE.Mesh( geometry, matLite );
            text.position.z = - 30;
            text.position.y = 10;
            text.position.x = -20;
            //scene.add( text );
            
            textGroup.children.map(x=>{x.geometry.translate(0,posOffsetY,0);x.material.opacity = 0.4;});
            textGroup.add(text);
            if (textGroup.children.length > maxLines) {
                var bottomLine = textGroup.children[0];
                textGroup.remove(bottomLine);
            }
            

        } ); //end load function
    }
    //textAdd("hello");
    scene.add(textGroup);
    function update(time) {

    }

    return {
        update,
        textAdd
    }

}