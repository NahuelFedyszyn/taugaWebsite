function iniciar(){
    setTimeout(function(){fadeIn(10,"homeTitle")},500);
    setTimeout(function(){fadeIn(10,"homeSubtitle")},1500);
    setTimeout(function(){fadeIn(10,"header")},1700);
}

var prevScrollpos = window.pageYOffset; //This variable indicates if we are going up or down in the page
window.onscroll = function() { //This function hides the header if we are going down, and shows it if we are going up
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-25vh";
  }
  prevScrollpos = currentScrollPos;
}

function fadeIn(segs, id){
    let element = document.getElementById(id);
    let op = 0.0;
    element.style.opacity = op;
    let interval = setInterval(aparecer,segs);
    function aparecer(){
        if(op<1){
            op = op+0.01;
            
            element.style.opacity = op;
        }
        else{
            clearInterval(interval);
        }
    }
}
