


var limit=document.querySelectorAll("button").length;

for(var i=0;i<limit;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function()
    {
        var which=this.innerHTML;
        var tune="sounds/"+which+".mp3";
        var audio=new Audio(tune);
        audio.play();
    })
}

function makesound(key)
{
    
    switch(key){
       
        case "w":
            var tune="sounds/"+"w"+".mp3";
            var audio=new Audio(tune);
            audio.play();
            break;

            case "a":
                var tune="sounds/"+"a"+".mp3";
                var audio=new Audio(tune);
                audio.play();
                break;
                



                case "s":
                    var tune="sounds/"+"s"+".mp3";
                    var audio=new Audio(tune);
                    audio.play();
                    break;


                    case "d":
                        var tune="sounds/"+"d"+".mp3";
                        var audio=new Audio(tune);
                        audio.play();
                        break;

                        case "j":
                            var tune="sounds/"+"j"+".mp3";
                            var audio=new Audio(tune);
                            audio.play();
                            break;



                            case "k":
                                var tune="sounds/"+"k"+".mp3";
                                var audio=new Audio(tune);
                                audio.play();
                                break;

                                case "l":
                                    var tune="sounds/"+"l"+".mp3";
                                    var audio=new Audio(tune);
                                    audio.play();
                                    break;

    }
}

document.addEventListener("keypress",function(event)
{
   console.log(event);
    makesound(event.key);
})