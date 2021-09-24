/*
By: Brendan Luke
Date: September 24, 2021
Scope: script and functions to configure the webpage based on selected operation
*/

function encodeSelect() {
    // styling & display
    document.getElementById("encode").className = "active";
    document.getElementById("decode").className = "";
    document.getElementById("encoderInput").style.display = "inline-block";
    document.getElementById("encoderOutput").style.display = "inline-block";
    document.getElementById("decoderInput").style.display = "none";
    document.getElementById("decoderOutput").style.display = "none";
}

function decodeSelect() {
    // styling & display
    document.getElementById("encode").className = "";
    document.getElementById("decode").className = "active";
    document.getElementById("encoderInput").style.display = "none";
    document.getElementById("encoderOutput").style.display = "none";
    document.getElementById("decoderInput").style.display = "inline-block";
    document.getElementById("decoderOutput").style.display = "inline-block";
}