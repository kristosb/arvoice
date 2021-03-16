import * as THREE from 'three'
import hfont from "../../../assets/helvetiker_regular.typeface.json";

export default function scene(scene) {   
    const textGroup = new THREE.Group();
    const loader = new THREE.FontLoader();
    function textAdd(txt,posY=0){
        loader.load( 'helvetiker_regular.typeface.json', function ( font ) {

            const color = 0x006699;

            const matDark = new THREE.LineBasicMaterial( {
                color: color,
                side: THREE.DoubleSide
            } );

            const matLite = new THREE.MeshBasicMaterial( {
                color: color,
                transparent: true,
                opacity: 0.4,
                side: THREE.DoubleSide
            } );

            const message = txt;//"   Three.js\nSimple text.";

            const shapes = font.generateShapes( message, 5 );

            const geometry = new THREE.ShapeGeometry( shapes );

            geometry.computeBoundingBox();

            const xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );

            geometry.translate( xMid, posY, 0 );

            // make shape ( N.B. edge view not visible )

            const text = new THREE.Mesh( geometry, matLite );
            text.position.z = - 20;
            text.position.y = 1.6;
            text.position.x = 0;
            //scene.add( text );
            textGroup.add(text);
            // make line shape ( N.B. edge view remains visible )
            /*
            const holeShapes = [];

            for ( let i = 0; i < shapes.length; i ++ ) {

                const shape = shapes[ i ];

                if ( shape.holes && shape.holes.length > 0 ) {

                    for ( let j = 0; j < shape.holes.length; j ++ ) {

                        const hole = shape.holes[ j ];
                        holeShapes.push( hole );

                    }

                }

            }

            shapes.push.apply( shapes, holeShapes );

            const lineText = new THREE.Object3D();

            for ( let i = 0; i < shapes.length; i ++ ) {

                const shape = shapes[ i ];

                const points = shape.getPoints();
                const geometry = new THREE.BufferGeometry().setFromPoints( points );

                geometry.translate( xMid, 0, 0 );

                const lineMesh = new THREE.Line( geometry, matDark );
                lineText.add( lineMesh );

            }

            scene.add( lineText );*/

        } ); //end load function
    }
    textAdd("hello");
    scene.add(textGroup);
    function update(time) {

    }

    return {
        update,
        textAdd
    }

}