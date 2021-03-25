let x = 0;
let y = 0;
let mouseX = 0;
let mouseY = 0;
let speed = 0.009;
let imgArr;
let bird;

window.onload = () => {
    imgArr = document.getElementById("img");
    bird = document.getElementsByClassName("vod")[0];

    window.addEventListener("mousemove", mouseFunc, false);

    function mouseFunc(e){
        x = (e.clientX - window.innerWidth /2);
        y = (e.clientY - window.innerHeight /2);
    }
    loop();
}

function loop(){
    mouseX +=(x - mouseX) * speed;
    mouseY +=(y - mouseY) * speed;

    bird.styld.transform = "translate("+ -(mouseX/8) + "px)";

    imgArr[1].styld.transform = "translate("+ -(mouseX/5) + "px)" + -(mouseY/5) + "px)";
    imgArr[1].styld.transform = "translate("+ -(mouseX/3) + "px)" + -(mouseY/3) + "px)";
    imgArr[1].styld.transform = "translate("+ -(mouseX/5) + "px)" + -(mouseY/5) + "px)";

    window.requestAnimationFrame(loop);
}