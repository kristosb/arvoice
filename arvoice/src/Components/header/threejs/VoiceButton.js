class VoiceButton {

	static createButton( renderer, options ) {

		if ( options ) {

			console.error( 'error ' );

		}

		const button = document.createElement( 'button' );

        button.style.display = '';

        button.style.cursor = 'pointer';
        button.style.left = 'calc(10% - 10px)';
        button.style.width = '100px';

        button.textContent = 'Start VOICE';

        button.onmouseenter = function () {

            button.style.opacity = '1.0';

        };

        button.onmouseleave = function () {

            button.style.opacity = '0.5';

        };
		function stylizeElement( element ) {

			element.style.position = 'absolute';
			element.style.top = '20px';
			element.style.padding = '12px 6px';
			element.style.border = '1px solid #fff';
			element.style.borderRadius = '4px';
			element.style.background = 'rgba(0,0,0,0.1)';
			element.style.color = '#fff';
			element.style.font = 'normal 13px sans-serif';
			element.style.textAlign = 'center';
			element.style.opacity = '0.5';
			element.style.outline = 'none';
			element.style.zIndex = '999';

		}
        button.id = 'VoiceButton';
        //button.style.display = 'none';
        stylizeElement(button);
        return button;
    }

}

export { VoiceButton };