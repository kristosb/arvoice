import SceneManager from './SceneManager';


export default container => {
    const canvas = createCanvas(document, container);
    const sceneManager = new SceneManager(canvas);

    let canvasHalfWidth;
    let canvasHalfHeight;
    
    container.appendChild(sceneManager.vrButtonGet());
    //container.appendChild(sceneManager.startVoiceGet());
    const elem = document.querySelector('#VRButton');//'#VoiceButton');
    elem.addEventListener('click', () => {
      console.log("startVoice");
      sceneManager.speachStart();
    });
    bindEventListeners();
    render();
    


    function createCanvas(document, container) {
        const canvas = document.createElement('canvas');    
        container.appendChild(canvas);
        
        return canvas;
    }

    function bindEventListeners() {
        window.onresize = resizeCanvas;
        //window.onmousemove = mouseMove;
        resizeCanvas();	
    }

    function resizeCanvas() {        
        canvas.style.width = '100%';
        canvas.style.height= '100%';
        
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        canvasHalfWidth = Math.round(canvas.offsetWidth/2);
        canvasHalfHeight = Math.round(canvas.offsetHeight/2);

        sceneManager.onWindowResize()
    }

    /*function mouseMove({screenX, screenY}) {
        sceneManager.onMouseMove(screenX-canvasHalfWidth, screenY-canvasHalfHeight);
    }*/

    function render(time) {
        sceneManager.vrRender(render);
        //requestAnimationFrame(render);
        sceneManager.update();
    }
}