// function slide(){
//     let slideValue = document.getElementById("slider").value;
//     document.getElementById("my-img").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
//     console.log("polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)");
// }

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

// Step-by-Step Explanation:

//     Retrieve the current value of the slider:

// let slideValue = document.getElementById("slider").value;

//     The slide() function begins by retrieving the current value of the slider input using document.getElementById("slider").value.
//     The value of the slider is a number between the min and max values of the slider, typically a percentage or a value between 0 and 100. This value determines how much of the image is visible, i.e., how much of the clip-path should be applied.

// Modify the clip-path property of the image:

// document.getElementById("my-img").style.clipPath = 
//     "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";

//     This line dynamically updates the clip-path property of the image element with the id="my-img".
//     The clip-path uses the polygon() function to define a clipping region that is a polygon. The polygon's coordinates are specified as four points:
//         (0 0) is the top-left corner.
//         slideValue% 0 is the top-right corner, where the slideValue defines how much of the image from the left will be shown.
//         slideValue% 100% is the bottom-right corner, which aligns with the top-right point horizontally but goes down to the bottom.
//         (0 100%) is the bottom-left corner, which is fixed at the bottom of the image.
//     As slideValue changes (from the slider), the clipping area adjusts to show more or less of the image. The left side of the image is revealed or hidden by updating the clip-path.

// Console Log for Debugging:

//     console.log("polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)");

//         This console.log() statement outputs the current clip-path value to the browser console. This is useful for debugging or tracking how the value of the clip-path changes as the slider is moved.
//         It prints the generated polygon() function with the updated slideValue, allowing the developer to see the current shape and position of the clipping region.

// Summary:

//     The slide() function is designed to adjust the visibility of an image by dynamically changing its clip-path property.
//     As the slider (#slider) is moved, the clip-path of the image (#my-img) is updated, revealing more or less of the image depending on the slider's value.
//     The console.log() statement helps to monitor the exact clip-path value during development or debugging.