var currentDiv = -1;
var totalDivs = 10;   // Número de questionários da página
var Buttons = document.getElementById("FormButton");

function showDiv(divNumber) {
    var divId = "div" + divNumber;
    var divs = document.getElementsByClassName("container");

    if (currentDiv == -1) {
        Buttons.style.display = "none";
    }

    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
    }

    document.getElementById(divId).style.display = "flex";
    currentDiv = divNumber;
}

 function showPrevious() {
     currentDiv--;
     if (currentDiv < 1) {
         currentDiv = totalDivs;
     }
     showDiv(currentDiv);
 }

 function showNext() {
     currentDiv++;
     if (currentDiv > totalDivs) {
         currentDiv = 1;
     }
     showDiv(currentDiv);
 }

 function StartForm(){
    if (document.getElementById("nom").value !="") {
        currentDiv = 1;
        Buttons.style.display = "flex";
        document.getElementById("div-1").style.display = "none";
        showDiv(currentDiv);   
    }
}

 window.addEventListener("load", function () {
    showDiv(currentDiv);
});

function openModal() {
    document.getElementById("div"+currentDiv).style.display = "none";
    document.getElementById("FormButton").style.display = "none";
    document.getElementById("submit").style.display = "none";
    var modalid = 0
    if (currentDiv > 0){
      modalid = currentDiv
    }
    var modal = document.getElementById("modal" + modalid);
    modal.style.display = "block";

    var timeInputI1 = document.getElementById("Hi" + modalid);
    var textInputI1 = document.getElementById("HoraI" + modalid);
    var timeInputF1 = document.getElementById("Hf" + modalid);
    var textInputF1 = document.getElementById("HoraF" + modalid);

    timeInputI1.addEventListener("input", function() {
        textInputI1.value = timeInputI1.value;
    });

    timeInputF1.addEventListener("input", function() {
        textInputF1.value = timeInputF1.value;
    });
}

function closeModal() {
    var modalid = 0
    if (currentDiv > 0){
      modalid = currentDiv
    }
    var modal = document.getElementById("modal" + modalid);
    modal.style.display = "none";
    document.getElementById("FormButton").style.display = "FLex";
    document.getElementById("submit").style.display = "Block";
    showDiv(currentDiv);
}