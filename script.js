player=document.getElementById("player");
speed=2
x=500
y=100

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

    const obj1 = block1.getBoundingClientRect();

    const obj2 = block2.getBoundingClientRect();



    if(obj1.right>obj2.left+20&&
        obj1.left<obj2.right-20&&
        obj1.top<obj2.top&&
        obj1.bottom>obj2.bottom
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
