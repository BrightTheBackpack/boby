let ingredients = [0,0,0,0,0,0,0,0] //boba, milk, tea, sugar, eyes, blood
let img = document.getElementById('liquid');

img.style.display = "none";
function addIngredient(ingredient) {
    if(ingredient == 0){
        let img = document.getElementById('ball');
        img.style.display = "inline";

    }
    if(ingredient == 4){
        let img = document.getElementById('eye');
        img.style.display = "inline";

    }
    if(ingredient == 1){
        //add some white
        let img = document.getElementById('liquid');
        img.style.display = "inline";

        img.style.filter = 'brightness(1.2)';
    }
    if(ingredient == 2){
        //add some black
        let img = document.getElementById('liquid');
        img.style.display = "inline";

        img.style.filter = 'brightness(0.8)';
    }
    if((ingredient == 1 && ingredients[2] == 1 )||( ingredient == 2 && ingredients[1] == 1)){
        //add some white
        let img = document.getElementById('liquid');
        img.style.display = "inline";

        img.style.filter = 'brightness(1) sepia(0.5) hue-rotate(20deg) saturate(2)';
    }
    if(ingredient == 5){
        //add some red
        let img = document.getElementById('liquid');
        img.style.display = "inline";

        img.style.filter = 'brightness(0.8) sepia(1) hue-rotate(-50deg) saturate(5)';
    }
    ingredients[ingredient] += 1;
    console.log(ingredients);
}
function removeIngredient(ingredient){
    if(ingredients[ingredient] > 0){
        ingredients[ingredient] =0;
    }
    console.log(ingredients);
    img.style.display = "none";
    if(ingredient == 0){
        let img = document.getElementById('ball');
        img.style.display = "none";

    }
    console.log(ingredient)
    if(ingredient == 4){
        let img = document.getElementById('eye');
        img.style.display = "none";

    }
    if(ingredients[1] == 1){
        //add some white
        let img = document.getElementById('liquid');
        img.style.display = "inline";

        img.style.filter = 'brightness(1.2)';
    }
    if(ingredients[2] == 1){
        //add some black
        let img = document.getElementById('liquid');
        img.style.display = "inline";

        img.style.filter = 'brightness(0.8)';
    }
    if((ingredients[1] == 1 && ingredients[2] == 1 )||( ingredients[2] == 1 && ingredients[1] == 1)){
        //add some white
        let img = document.getElementById('liquid');
        img.style.display = "inline";

        img.style.filter = 'brightness(1) sepia(0.5) hue-rotate(20deg) saturate(2)';
    }
    if(ingredients[5] == 1){
        //add some red
        console.log()
        let img = document.getElementById('liquid');
        img.style.display = "inline";

        img.style.filter = 'brightness(0.8) sepia(1) hue-rotate(-50deg) saturate(5)';
    }
}


function judge(){
    let ghost = document.getElementById('ghost');
    ghost.style.position = 'absolute';
    ghost.style.transition = 'all 2s ease-in-out';
    ghost.style.left = '70%';
    ghost.style.top = '50%';
    setTimeout(()=>{
        if(ingredients[0] == 1 && ingredients[1] == 1 && ingredients[2] == 1 && ingredients[3] == 1 && ingredients[4] == 0 && ingredients[5] == 0){
            let img = document.getElementById('liquid');
            img.style.display = "inline";
            img.style.filter = 'brightness(1.2)';
            let win = document.getElementById('win');
            win.style.display = "block";
        }else{
            let win = document.getElementById('lose');
            win.style.display = "block";
        }
    },2000)
    
}