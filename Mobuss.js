var currentDiv = -1;
var totalDivs = 10;
const Buttons = document.getElementById("FormButton");
const ServInputs = document.querySelectorAll('.Serv');
const LocInputs = document.querySelectorAll('.Loc');
const radioButtonsL = document.querySelectorAll('.menuL');
const radioButtonsS = document.querySelectorAll('.menuS');
const columnsL = document.querySelectorAll('.columnL');
const columnsS = document.querySelectorAll('.columnS');
let labelTextL = "HABITAÇÃO";
let labelTextS = "HABITAÇÃO";
let Servid;
let Locid;

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
    modal.style.display = "Flex";

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

//Código menu horizontal (Local)

function updateLabelTextS(text) {
  const innerelement = document.getElementById('seleçãoS');
  innerelement.innerHTML = '<h3>Seleção: ' + text + '</h3>';
}

function updateLabelTextL(text) {
    const innerelement = document.getElementById('seleçãoL');
    innerelement.innerHTML = '<h3>Seleção: ' + text + '</h3>';
}

function setInitialLabelTextS() {
    updateLabelTextS(labelTextS);
}

function setInitialLabelTextL() {
  updateLabelTextL(labelTextL);
}

document.addEventListener('DOMContentLoaded', setInitialLabelTextS);
document.addEventListener('DOMContentLoaded', setInitialLabelTextL);

radioButtonsS.forEach((radio) => {
    radio.addEventListener('change', function () {
const selectedValue = parseInt(this.value);
const selectedId = this.id;
        
const label = document.querySelector(`label[for="${selectedId}"]`);
labelTextS = label.textContent;
updateLabelTextS(labelTextS); 
      
const selectedElements = [];
const hiddenColumns = [];

switch (true) {
case (0 < selectedValue && selectedValue < 6):
columnsS.forEach((column, index) => {
  if (index === 0 || index === selectedValue) {
    selectedElements.push(column);
  } else {
    hiddenColumns.push(column);
  }
});

selectedElements.forEach((element) => {
  element.style.display = 'flex';
});

hiddenColumns.forEach((column) => {
  column.style.display = 'none';
});
break;
    case (5 < selectedValue && selectedValue < 27):
columnsS.forEach((column, index) => {
  if (index === 0 ||index === 1 || index === selectedValue) {
    selectedElements.push(column);
  } else {
    hiddenColumns.push(column);
  }
});

selectedElements.forEach((element) => {
  element.style.display = 'flex';
});

hiddenColumns.forEach((column) => {
  column.style.display = 'none';
});
break;
case (26 < selectedValue && selectedValue < 132):
  columnsS.forEach((column, index) => {
    const PrevColumn = Math.ceil((selectedValue - 26) / 5) + 5;
    if (index === 0 ||index === 1 || index === PrevColumn || index === selectedValue) {
      selectedElements.push(column);
    } else {
      hiddenColumns.push(column);
    }
  });
  console.log(selectedElements)
  selectedElements.forEach((element) => {
    element.style.display = 'flex';
  });
  
  hiddenColumns.forEach((column) => {
    column.style.display = 'none';
  });
  break;

default:

break;

}
});
});

radioButtonsL.forEach((radio) => {
  radio.addEventListener('change', function () {
const selectedValue = parseInt(this.value);
const selectedId = this.id;
      
const label = document.querySelector(`label[for="${selectedId}"]`);
labelTextL = label.textContent;
updateLabelTextL(labelTextL); 
    
const selectedElements = [];
const hiddenColumns = [];

switch (true) {
case (0 < selectedValue && selectedValue < 6):
columnsL.forEach((column, index) => {
if (index === 0 || index === selectedValue) {
  selectedElements.push(column);
} else {
  hiddenColumns.push(column);
}
});

selectedElements.forEach((element) => {
element.style.display = 'flex';
});

hiddenColumns.forEach((column) => {
column.style.display = 'none';
});
break;
  case (5 < selectedValue && selectedValue < 27):
columnsL.forEach((column, index) => {
if (index === 0 ||index === 1 || index === selectedValue) {
  selectedElements.push(column);
} else {
  hiddenColumns.push(column);
}
});

selectedElements.forEach((element) => {
element.style.display = 'flex';
});

hiddenColumns.forEach((column) => {
column.style.display = 'none';
});
break;
case (26 < selectedValue && selectedValue < 132):
columnsL.forEach((column, index) => {
  const PrevColumn = Math.ceil((selectedValue - 26) / 5) + 5;
  if (index === 0 ||index === 1 || index === PrevColumn || index === selectedValue) {
    selectedElements.push(column);
  } else {
    hiddenColumns.push(column);
  }
});
console.log(selectedElements)
selectedElements.forEach((element) => {
  element.style.display = 'flex';
});

hiddenColumns.forEach((column) => {
  column.style.display = 'none';
});
break;

default:

break;

}
});
});


ServInputs.forEach((Serv) => {
  Serv.addEventListener('click', function() {
    document.getElementById("ContainerServ").style.display = "Flex";
    Servid = document.getElementById(this.id);
  });
});

function SaveLabelS(){
  Servid.value = labelTextS;
  document.getElementById("ContainerServ").style.display = "none";
};

LocInputs.forEach((Loc) => {
  Loc.addEventListener('click', function() {
    document.getElementById("ContainerLocal").style.display = "Flex";
    Locid = document.getElementById(this.id);
  });
});

function SaveLabelL(){
  Locid.value = labelTextL;
  document.getElementById("ContainerLocal").style.display = "none";
};