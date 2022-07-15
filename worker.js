onmessage = function(message)
{
play = function(){
        sequencing.forEach((arr, i) => { setTimeout( () => {
         $(".shadowPlay").removeClass("shadowPlay").stop();

         setInterval(function () {

         arr.forEach(id => $("#" + id).addClass("shadowPlay"));
         }, i * 265);
       
          });
   
       }, 265);

    
    }
   
      
   
    myString = play.toString();
    postMessage(myString);

}


