var buttonColors=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;var started=0;

function startover()
    {
        level=0;
        gamePattern=[];
        started=0;
        userClickedPattern=[];
    }
    
$(document).keydown(function()
{
    if(started!=1)
    {
    level=level+1;
    $("#level-title").text("Level "+level);
    nextSequence();
    started++;

    
    }
});


    
$(".btn").click(function()
    {
        
        
        var userChosenColour=this.id;
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length-1);
        
        
        
    });
    
function checkAnswer(currentLevel)
{
    if(userClickedPattern[currentLevel]==gamePattern[currentLevel])
    {
        if(userClickedPattern.length==gamePattern.length)
        {
            level++;
            $("#level-title").text("Level "+level);
            setTimeout(function()
            {
                nextSequence();userClickedPattern=[];
            },1000);
        }
    }
    else{
        $("#level-title").text("Game Over, Press Any Key to Restart");
        
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
           }, 1000);
           
           startover();

        }
    }
    


   



function playSound(name)
{
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}
function animatePress(currentColour)
{
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
   }, 100);

}
function nextSequence()
{
    
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
 
    
    }
   
    



