/*
By: Brendan Luke
Date: September 21, 2021
Scope: script and functions to extract pixel value data from the image & display image
*/

var imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);
var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');

function handleImage(e) { // file upload
    var reader = new FileReader();
    reader.onload = function(event) {
        var img = new Image();
        img.onload = function() { // display image in canvas (max dimension is 50vh or 60vw, maintain aspect ratio)
            // img.width/height, window.innerHeigh/Width
            imgAspectRatio = img.width/img.height;
            screenAspectRatio = window.innerWidth/window.innerHeight;



            canvas.width = Math.min(img.width, 500);
            canvas.height = Math.min(img.height, 500);
            ctx.drawImage(img,0,0,canvas.width,canvas.height);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
}

function imgDataFunc() { // get image data from canvas
    context = document.getElementById('imageCanvas').getContext('2d');
    width = document.getElementById('imageCanvas').width;
    height = document.getElementById('imageCanvas').height;
    imgd = context.getImageData(0,0,width,height);
    pix = imgd.data;
    Red = [];     
    Green = [];
    Blue = [];

    // Loop over each pixel
    for (i = 0; i < height; i++) { // for each row of image
        RedTemp = [];
        GreenTemp = [];
        BlueTemp = [];
        for (j = 0; j < width; j++) { // for each pixel in row
            n = j*width + i; // pixel number
            RedTemp[j] = pix[4*n + 0];
            GreenTemp[j] = pix[4*n + 1];
            BlueTemp[j] = pix[4*n + 2];
        }
        Red[i] = RedTemp;
        Green[i] = GreenTemp;
        Blue[i] = BlueTemp;

        //data = context.getImageData(n,n,1,1).data;

        //rgb[i] = [ data[0], data[1], data[2] ];
        //pix[i  ] = 255 - pix[i  ]; // red
        //pix[i+1] = 255 - pix[i+1]; // green
        //pix[i+2] = 255 - pix[i+2]; // blue
        // i+3 is alpha (the fourth element)     
    }
    document.getElementById('writeMe').innerText = Red;
    console.log('finished');
}