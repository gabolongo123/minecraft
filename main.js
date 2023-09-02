var canvas = new fabric.Canvas('my_Canvas');

block_image_width = 30;
block_image_height = 30;

player_y = 10;
player_x = 10;

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

    function new_image(get_image) {
        fabric.Image.fromURL(get_image, function(Img){
            block_image_object = Img;
    
            block_image_object.scaleToWidth(block_image_width);
            block_image_object.scaleToHeight(block_image_height);
            block_image_object.set({
                top:player_y,
                left:player_x
            });
            canvas.add(block_image_object);
        });
    }

    window.addEventListener("keydown", MyKeyDown);
    function MyKeyDown (e) {
        keyPressed = e.keyCode;

        console.log(keyPressed);
        
        if (e.shiftKey == true && keyPressed == '80') {
            console.log("se presiona p y shift al mismo tiempo");
            block_image_width = block_image_width + 5;

            block_image_height = block_image_height + 5;
            document.getElementById("Current_width").innerHTML = block_image_width;
            document.getElementById("Current_height").innerHTML = block_image_height;
        }

        if (e.shiftKey == true && keyPressed == '77') {
            console.log("se presiona m y shift al mismo tiempo");
            block_image_width = block_image_width - 5;

            block_image_height = block_image_height - 5;
            document.getElementById("Current_width").innerHTML = block_image_width;
            document.getElementById("Current_height").innerHTML = block_image_height;
        }

        if (keyPressed == '38') {
            Up();
            console.log("Up");
        }

        if (keyPressed == '40') {
            Down();
            console.log("Down");
        }

        if (keyPressed == '39') {
            Right();
            console.log("Right");
        }

        if (keyPressed == '37') {
            Left();
            console.log("left");
        }

        if (keyPressed == '87') {
            new_image('wall.jpg');
            console.log("w");
        }

        if (keyPressed == '71') {
            new_image('ground.png');
            console.log("g");
        }

        if (keyPressed == '76') {
            new_image('light_green.png');
            console.log("l");
        }

        if (keyPressed == '84') {
            new_image('trunk.jpg');
            console.log("t");
        }

        if (keyPressed == '82') {
            new_image('roof.jpg');
            console.log("r");
        }

        if (keyPressed == '89') {
            new_image('yellow_wall.png');
            console.log("y");
        }

        if (keyPressed == '68') {
            new_image('dark_green.png');
            console.log("d");
        }

        if (keyPressed == '85') {
            new_image('unique.png');
            console.log("u");
        }

        if (keyPressed == '67') {
            new_image('cloud.jpg');
            console.log("c");
        }

    }

    function Up() {
        if (player_y >= 0) {
            player_y = player_y - block_image_height;
            console.log("altura del bloque = " + block_image_height);
            console.log("cuando se presiona la tecla de flecha arriba, x = " + player_x + " , y = " + player_y);
            canvas.remove(player_object);
            player_update();
        }
        
    }

    function Down() {
        if (player_y <= 550) {
            player_y = player_y + block_image_height;
            console.log("altura del bloque = " + block_image_height);
            console.log("cuando se presiona la tecla de flecha abajo, x = " + player_x + " , y = " + player_y);
            canvas.remove(player_object);
            player_update();
        }
    }

    function Right() {
        if (player_x <= 850) {
            player_x = player_x + block_image_width;
            console.log("ancho del bloque = " + block_image_width);
            console.log("cuando se presiona la tecla de flecha derecha, x = " + player_x + " , y = " + player_y);
            canvas.remove(player_object);
            player_update();
        }
    }

    function Left() {
        if (player_x >= 0) {
            player_x = player_x - block_image_width;
            console.log("ancho del bloque = " + block_image_width);
            console.log("cuando se presiona la tecla de flecha izquierda, x = " + player_x + " , y = " + player_y);
            canvas.remove(player_object);
            player_update();
        }
    }