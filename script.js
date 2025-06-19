worldObjects=["house","house-2","house-3","house-4","house-5","tree"]
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
        player.style.backgroundImage="url('assests/character/idle.png')";


    }
})

function z(objectId){
    pla=document.getElementById("player").getBoundingClientRect()
    obj=document.getElementById(objectId).getBoundingClientRect()
    ob=document.getElementById(objectId)

    if(pla.bottom>obj.bottom){

     
        ob.style.zIndex = 0; 
       

    }else{
        ob.style.zIndex = 1; 
       
    }

}

function collision(id1){

    block1=document.getElementById(id1)
    block2=document.getElementById("player")

    const obj1 = block1.getBoundingClientRect();

    const obj2 = block2.getBoundingClientRect();



    if(obj1.right>obj2.left+15&&
        obj1.left<obj2.right-15&&
        obj1.top<obj2.top&&
        obj1.bottom>obj2.bottom
    ){
        console.log("collide")
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
    for(i of worldObjects){
        if (collision(i)){
            x=prevx
            y=prevy
    
            player.style.left=x+"px";
            player.style.top=y+"px";
    
        }
        z(i)

    }


    requestAnimationFrame(update)

}
update()
