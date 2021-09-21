/*
By: Brendan Luke
Date: September 21, 2021
Scope: script and functions to configure the webpage based on selected operation
*/

function encodeSelect() {
    // styling & display
    document.getElementById("encode").className = "active";
    document.getElementById("decode").className = "";
    //document.getElementById("userPrompt").style.display = "none";
}

function decodeSelect() {
    // styling & display
    document.getElementById("encode").className = "";
    document.getElementById("decode").className = "active";
    //document.getElementById("userPrompt").style.display = "none";
}