var limit=( document.querySelectorAll("button").length);

for(var i=0;i<limit;i++)
{
    // var tune = "./sounds/tom-"+1+".mp3";
    document.querySelectorAll("button")[i].addEventListener("click",function ()
    {
        // var audio =new Audio("sounds/crash.mp3");
        // audio.play();
       var which=(this.innerHTML);
       var tune=("sounds/"+which+".mp3");
       var audio=new Audio(tune);
       audio.play();
  
    });
}

