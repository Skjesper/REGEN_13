function slide() {
    let slideValue = document.getElementById("slider").value;

    document.getElementById("my-img").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
    
    document.querySelector(".divider").style.left = slideValue + "%";
    
    console.log("polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)");
}

window.onload = function() {

    document.getElementById("slider").value = 50;

    slide();
};