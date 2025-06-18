player=document.getElementById("player");
speed=2.5
x=500
y=500

keys={
    "ArrowUp":false,
    "ArrowDown":false,

    "ArrowLeft":false,
    "ArrowRight":false,
}



addEventListener("keydown",function(e){
    if (e.key in keys){
        keys[e.key]=true;

}
})

addEventListener("keyup",function(e){
    if(e.key in keys){
        keys[e.key]=false;
        player.style.backgroundImage="url('assests/character/downwalk.gif')";

    }
})


function collision(id1){

    block1=document.getElementById(id1)
    block2=document.getElementById("player")

    const rect1 = block1.getBoundingClientRect();

    const rect2 = block2.getBoundingClientRect();



    if (rect1.left<rect2.right&&
        rect1.right>rect2.left&&
        rect1.top<rect2.bottom+60&&
        rect1.bottom>rect2.top+60
    ){
        return true
    }

}




function update(){
    prevx=x
    prevy=y
    if(keys.ArrowUp){
        y-=speed;
        player.style.backgroundImage="url('assests/character/upwalking.gif')";

    }
    if(keys.ArrowDown){
        y+=speed;
        player.style.backgroundImage="url('assests/character/downwalk.gif')";

    }
    if(keys.ArrowLeft){
        x-=speed;
        player.style.backgroundImage="url('assests/character/leftwalking.gif')";

    }
    if(keys.ArrowRight){
        x+=speed;
        player.style.backgroundImage="url('assests/character/rightwalk.gif')";

    }

    player.style.left=x+"px";
    player.style.top=y+"px";

    if (collision("house")){
        x=prevx
        y=prevy

        player.style.left=x+"px";
        player.style.top=y+"px";

    }

    requestAnimationFrame(update)
}
update()
