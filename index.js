for(var i=0;i<7;i++)
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick)

function handleClick()
{
    var letter=this.innerHTML;
    makeSound(letter);
    buttonAnimation(letter);
}

document.addEventListener("keypress",function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(letter)
{
    if(letter=="w")
    {
    var audio=new Audio("sounds/tom-1.mp3");
    }
    else if(letter=="a")
    var audio=new Audio("sounds/tom-2.mp3");
    else if(letter=="s")
    var audio=new Audio("sounds/tom-3.mp3");
    else if(letter=="d")
    var audio=new Audio("sounds/tom-4.mp3");
    else if(letter=="j")
    var audio=new Audio("sounds/crash.mp3");
    else if(letter=="k")
    var audio=new Audio("sounds/kick-bass.mp3");
    else if(letter=="l")
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
    this.style.color="white";
}

function buttonAnimation(currentKey)
{
    var activeButton= document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
}