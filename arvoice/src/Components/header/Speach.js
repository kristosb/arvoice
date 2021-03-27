import { strict } from 'assert';
const EventEmitter = require( 'events' );
try {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
  }
  catch(e) {
    console.error(e);
    //$('.no-browser-support').show();
    //$('.app').hide();
  }


export default function scene() {  
    const event = new EventEmitter();
    var something = 1;
    var noteContent = '';
    recognition.continuous = true;
    var scrollTimeout;
    /*function getText(){
        const msg ="hello1";
        emit("ready","hello2"+something.toString());
        something = something +1;
        return msg;
    }*/
    // This block is called every time the Speech APi captures a line. 
    recognition.onresult = function(event) {

        // event is a SpeechRecognitionEvent object.
        // It holds all the lines we have captured so far. 
        // We only need the current one.
        var current = event.resultIndex;
    
        // Get a transcript of what was said.
        var transcript = event.results[current][0].transcript;
    
        // Add the current transcript to the contents of our Note.
        // There is a weird bug on mobile, where everything is repeated twice.
        // There is no official solution so far so we have to handle an edge case.
        var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);
    
        if(!mobileRepeatBug) {
        //noteContent += transcript;
        //emit("ready",transcript);
          if (scrollTimeout) clearInterval(scrollTimeout);
          var transArray = transcript.match(/.{1,12}/g);
          transArray.reverse().map(x=>emit("ready",x));
          //scrollTimeout = setTimeout(function(){emit("ready","tmout")},5000);
          scrollTimeout = setInterval(function(){emit("ready","\n")},3000);
        }
    };
    recognition.onstart = function() { 
        emit("ready","...");
      }
      
      recognition.onspeechend = function() {
        emit("ready",".");
        if (scrollTimeout) clearInterval(scrollTimeout);
        //recognition.stop();
        //recognition.start();
      }
      
      recognition.onerror = function(event) {
        if(event.error == 'no-speech') {
            emit("ready","...no speach..."); 
            if (scrollTimeout) clearInterval(scrollTimeout);
        };
      }
    function emit(name, data){
        event.emit(name, data);
    }
    function on(name,data){
        event.on(name, data);
        //console.log("text");
    }
    function start(){
        recognition.start();
    }
    function stop(){
        recognition.stop();
    }
    return {
        //getText,
        on,
        start,
        stop
    }

}