canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
var player_object="";
var block_image_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(player_object);
    });
 }
 function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(block_image_object);
    });
 }
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log("keypressed");
    if(e.shiftKey==true && keypressed=="80"){
        console.log("p and shiftkey pressed together")
        block_image_width+=10;
        block_image_height+=10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey==true && keypressed=="77"){
        console.log("m and shiftkey pressed together")
        block_image_width-=10;
        block_image_height-=10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keypressed=="38"){
        up();
        console.log("up key is pressed");
    }
    if(keypressed=="40"){
        down();
        console.log("down key is pressed");
    }
    if(keypressed=="39"){
        right();
        console.log("right key is pressed");
    }
    if(keypressed=="37"){
        left();
        console.log("left key is pressed");
    }
    if(keypressed=="87"){
        console.log("w key is pressed");
        new_image("wall.jpg");
    }
    if(keypressed=="71"){
        console.log("g key is pressed");
        new_image("ground.png");
    }
    if(keypressed=="76"){
        console.log("l key is pressed");
        new_image("light_green.png");
    }
    if(keypressed=="84"){
        console.log("t key is pressed");
        new_image("trunk.jpg");
    }
    if(keypressed=="82"){
        console.log("r key is pressed");
        new_image("roof.jpg");
    }
    if(keypressed=="89"){
        console.log("y key is pressed");
        new_image("yellow_wall.png");
    }
    if(keypressed=="68"){
        console.log("d key is pressed");
        new_image("dark_green.png");
    }
    if(keypressed=="67"){
        console.log("c key is pressed");
        new_image("cloud.jpg");
    }
    if(keypressed=="85"){
        console.log("u key is pressed");
        new_image("unique.png");
    }
    if(keypressed="46"){
        console.log("delete key is pressed");
        canvas.remove(canvas.getActiveObject());
    }
}

function up(){
    if(player_y>10){
        player_y=player_y-block_image_height;
        console.log("block_image_height " + block_image_height);
        console.log("When up arrow key is pressed x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }

} 

function down(){
    if(player_y<460){
        player_y=player_y+block_image_height;
        console.log("block_image_height " + block_image_height);
        console.log("When down arrow key is pressed x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }

} 

function left(){
    if(player_x>0){
        player_x=player_x-block_image_width;
        console.log("block_image_width " + block_image_width);
        console.log("When left arrow key is pressed x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }

} 

function right(){
    if(player_x<850){
        player_x=player_x+block_image_width;
        console.log("block_image_width " + block_image_width);
        console.log("When right arrow key is pressed x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }

} 