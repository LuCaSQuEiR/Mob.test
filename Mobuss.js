var currentDiv = -1;
var totalDivs = 10;   // Número de questionários da página
var Buttons = document.getElementById("FormButton");

window.addEventListener("load", function () {
    showDiv(currentDiv);
});

function showDiv(divNumber) {
    var divId = "div" + divNumber;
    var divs = document.getElementsByClassName("container");

    if (currentDiv == -1) {
        Buttons.style.display = "none";
    }

    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
    }

    document.getElementById(divId).style.display = "block";
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
    currentDiv = 1;
    Buttons.style.display = "block";
    document.getElementById("div-1").style.display = "none";
    showDiv(currentDiv);
 }

 window.addEventListener("load", function () {
    showDiv(currentDiv);
});

function openModal1() {
    var modal = document.getElementById("modal1");
    modal.style.display = "block";

    var timeInputI1 = document.getElementById("Hi1");
    var textInputI1 = document.getElementById("HoraI1");
    var timeInputF1 = document.getElementById("Hf1");
    var textInputF1 = document.getElementById("HoraF1");

    timeInputI1.addEventListener("input", function() {
        textInputI1.value = timeInputI1.value;
    });

    timeInputF1.addEventListener("input", function() {
        textInputF1.value = timeInputF1.value;
    });
}

function closeModal1() {
    var modal = document.getElementById("modal1");
    modal.style.display = "none";
}

function openModal2() {
    var modal = document.getElementById("modal2");
    modal.style.display = "block";

    var timeInputI2 = document.getElementById("Hi2");
    var textInputI2 = document.getElementById("HoraI2");
    var timeInputF2 = document.getElementById("Hf2");
    var textInputF2 = document.getElementById("HoraF2");

    timeInputI2.addEventListener("input", function() {
        textInputI2.value = timeInputI2.value;
    });

    timeInputF2.addEventListener("input", function() {
        textInputF2.value = timeInputF2.value;
    });
}

function closeModal2() {
    var modal = document.getElementById("modal2");
    modal.style.display = "none";
}

function openModal3() {
    var modal = document.getElementById("modal3");
    modal.style.display = "block";

    var timeInputI3 = document.getElementById("Hi3");
    var textInputI3 = document.getElementById("HoraI3");
    var timeInputF3 = document.getElementById("Hf3");
    var textInputF3 = document.getElementById("HoraF3");

    timeInputI3.addEventListener("input", function() {
        textInputI3.value = timeInputI3.value;
    });

    timeInputF3.addEventListener("input", function() {
        textInputF3.value = timeInputF3.value;
    });
}

function closeModal3() {
    var modal = document.getElementById("modal3");
    modal.style.display = "none";
}

function openModal4() {
    var modal = document.getElementById("modal4");
    modal.style.display = "block";

    var timeInputI4 = document.getElementById("Hi4");
    var textInputI4 = document.getElementById("HoraI4");
    var timeInputF4 = document.getElementById("Hf4");
    var textInputF4 = document.getElementById("HoraF4");

    timeInputI4.addEventListener("input", function() {
        textInputI4.value = timeInputI4.value;
    });

    timeInputF4.addEventListener("input", function() {
        textInputF4.value = timeInputF4.value;
    });
}

function closeModal4() {
    var modal = document.getElementById("modal4");
    modal.style.display = "none";
}

function openModal5() {
    var modal = document.getElementById("modal5");
    modal.style.display = "block";

    var timeInputI5 = document.getElementById("Hi5");
    var textInputI5 = document.getElementById("HoraI5");
    var timeInputF5 = document.getElementById("Hf5");
    var textInputF5 = document.getElementById("HoraF5");

    timeInputI5.addEventListener("input", function() {
        textInputI5.value = timeInputI5.value;
    });

    timeInputF5.addEventListener("input", function() {
        textInputF5.value = timeInputF5.value;
    });
}

function closeModal5() {
    var modal = document.getElementById("modal5");
    modal.style.display = "none";
}

function openModal6() {
    var modal = document.getElementById("modal6");
    modal.style.display = "block";

    var timeInputI6 = document.getElementById("Hi6");
    var textInputI6 = document.getElementById("HoraI6");
    var timeInputF6 = document.getElementById("Hf6");
    var textInputF6 = document.getElementById("HoraF6");

    timeInputI6.addEventListener("input", function() {
        textInputI6.value = timeInputI6.value;
    });

    timeInputF6.addEventListener("input", function() {
        textInputF6.value = timeInputF6.value;
    });
}

function closeModal6() {
    var modal = document.getElementById("modal6");
    modal.style.display = "none";
}

function openModal7() {
    var modal = document.getElementById("modal7");
    modal.style.display = "block";

    var timeInputI7 = document.getElementById("Hi7");
    var textInputI7 = document.getElementById("HoraI7");
    var timeInputF7 = document.getElementById("Hf7");
    var textInputF7 = document.getElementById("HoraF7");

    timeInputI7.addEventListener("input", function() {
        textInputI7.value = timeInputI7.value;
    });

    timeInputF7.addEventListener("input", function() {
        textInputF7.value = timeInputF7.value;
    });
}

function closeModal7() {
    var modal = document.getElementById("modal7");
    modal.style.display = "none";
}

function openModal8() {
    var modal = document.getElementById("modal8");
    modal.style.display = "block";

    var timeInputI8 = document.getElementById("Hi8");
    var textInputI8 = document.getElementById("HoraI8");
    var timeInputF8 = document.getElementById("Hf8");
    var textInputF8 = document.getElementById("HoraF8");

    timeInputI8.addEventListener("input", function() {
        textInputI8.value = timeInputI8.value;
    });

    timeInputF8.addEventListener("input", function() {
        textInputF8.value = timeInputF8.value;
    });
}

function closeModal8() {
    var modal = document.getElementById("modal8");
    modal.style.display = "none";
}

function openModal9() {
    var modal = document.getElementById("modal9");
    modal.style.display = "block";

    var timeInputI9 = document.getElementById("Hi9");
    var textInputI9 = document.getElementById("HoraI9");
    var timeInputF9 = document.getElementById("Hf9");
    var textInputF9 = document.getElementById("HoraF9");

    timeInputI9.addEventListener("input", function() {
        textInputI9.value = timeInputI9.value;
    });

    timeInputF9.addEventListener("input", function() {
        textInputF9.value = timeInputF9.value;
    });
}

function closeModal9() {
    var modal = document.getElementById("modal9");
    modal.style.display = "none";
}

function openModal10() {
    var modal = document.getElementById("modal10");
    modal.style.display = "block";

    var timeInputI10 = document.getElementById("Hi10");
    var textInputI10 = document.getElementById("HoraI10");
    var timeInputF10 = document.getElementById("Hf10");
    var textInputF10 = document.getElementById("HoraF10");

    timeInputI10.addEventListener("input", function() {
        textInputI10.value = timeInputI10.value;
    });

    timeInputF10.addEventListener("input", function() {
        textInputF10.value = timeInputF10.value;
    });
}

function closeModal10() {
    var modal = document.getElementById("modal10");
    modal.style.display = "none";
}