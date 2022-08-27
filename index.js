var work = document.getElementById("work");
var employ = document.getElementById("employ");
var family = document.getElementById("family");
var career = document.getElementById("career");
var workdrop = document.getElementById("workdrop")
var employdrop = document.getElementById("employdrop")
var familydrop = document.getElementById("familydrop")
var careerdrop = document.getElementById("careerdrop")
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
function showAndHideWorkdrop() {
    if ( count1%2===0){
        workdrop.style.visibility = "visible"
    }
    else {
        workdrop.style.visibility = "hidden"
    }
    count1++
}
function showAndHideEmploydrop() {
    if ( count2%2===0){
        employdrop.style.visibility = "visible"
    }
    else {
        employdrop.style.visibility = "hidden"
    }
    count2++
}
function showAndHideFamilydrop() {
    if ( count3%2===0){
        familydrop.style.visibility = "visible"
    }
    else {
        familydrop.style.visibility = "hidden"
    }
    count3++
}
function showAndHideCareerdrop() {
    if ( count4%2===0){
        careerdrop.style.visibility = "visible"
    }
    else {
        careerdrop.style.visibility = "hidden"
    }
    count4++
}

work.addEventListener('click', showAndHideWorkdrop)
employ.addEventListener('click', showAndHideEmploydrop)
family.addEventListener('click', showAndHideFamilydrop)
career.addEventListener('click', showAndHideCareerdrop)
var burger = document.getElementById("burger")
var cross = document.getElementById("cross")
var msnavdrop = document.getElementById("msnavdrop")
count = 2
function burgerAndCrossfunction () {
    if ( count%2===0 ) {
        burger.style.display = "none"
        cross.style.display = "flex"
        msnavdrop.style.visibility = "visible"
    }
    else if ( count%2!=0 ) {
        burger.style.display = "flex"
        cross.style.display = "none"
        msnavdrop.style.visibility = "hidden"
    }
    count++
}
document.getElementById("burger").addEventListener('click', burgerAndCrossfunction)
document.getElementById("cross").addEventListener('click', burgerAndCrossfunction)
var msnavdropwork = document.getElementById("msnavdropwork")
var msnavdropemploy = document.getElementById("msnavdropemploy")
var msnavdropfamily = document.getElementById("msnavdropfamily")
var msnavdropcareer = document.getElementById("msnavdropcareer")
var msnavdropworksub = document.getElementById("msnavdropworksub")
var msnavdropemploysub = document.getElementById("msnavdropemploysub")
var msnavdropfamilysub = document.getElementById("msnavdropfamilysub")
var msnavdropcareersub = document.getElementById("msnavdropcareersub")
var countws = 2
var countes = 2
var countfs = 2
var countcs = 2
function worksub () {
    if (countws%2===0) {
        msnavdropwork.appendChild(msnavdropworksub)
    }
    else {
        msnavdropwork.removeChild(msnavdropwork.childNodes[1]);
    }
    countws++
}

function employsub () {
    if (countes%2===0) {
        msnavdropemploy.appendChild(msnavdropemploysub)
    }
    else {
        msnavdropemploy.removeChild(msnavdropemploy.childNodes[1]);
    }
    countes++ 
}

function familysub () {
    if (countfs%2===0) {
        msnavdropfamily.appendChild(msnavdropfamilysub)
    }
    else {
        msnavdropfamily.removeChild(msnavdropfamily.childNodes[1]);
    }
    countfs++
}

function careersub () {
    if (countcs%2===0) {
        msnavdropcareer.appendChild(msnavdropcareersub)
    }
    else {
        msnavdropcareer.removeChild(msnavdropcareer.childNodes[1]);
    }
    countcs++
}
msnavdropwork.addEventListener('click', worksub)
msnavdropemploy.addEventListener('click', employsub)
msnavdropfamily.addEventListener('click', familysub)
msnavdropcareer.addEventListener('click', careersub)
var txt = ["worries","anxiety","school stuff","tough behaviour","breakups","the blues","brighter days"]
var changetxt = document.getElementById("boldtxt")
var counter = 0;
function changetext() {
  changetxt.innerHTML = txt[counter];
  counter++;
  if (counter >= txt.length) {
    counter = 0;
  }
}

var inst = setInterval(changetext, 1200);