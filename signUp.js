var checkbox = document.getElementById("check")
var pass = document.getElementById("password")
function showHide() {
    if (pass.type === "password") {
        pass.type = "text"
    }
    else {
        pass.type = "password"
    }
}
checkbox.addEventListener('click', showHide)
var passInput = document.getElementById("password")
var char = document.getElementById("min8char")
var num = document.getElementById("min1num")
var lower = document.getElementById("min1lowercase")
var special = document.getElementById("min1specialchar")
var upper = document.getElementById("min1uppercase")
function charCondition() {
    var inpt = document.getElementById("password").value.split("")
    if (inpt.length >= 8) {
        char.style.color = "black"
    }
    else {
        char.style.removeProperty('color')
    }
}
function numCondition() {
    var count = 0
    var inpt = document.getElementById("password").value.split("")
    var number = ["1","2","3","4","5","6","7","8","9","0"]

    for (var i = 0; i < inpt.length; i++) {
        for ( var j = 0; j < 10; j++) {
            if (inpt[i]===number[j]) {
                count++
                break
            }
        }
    }
    if (count > 0) {
        num.style.color = "black"
    }
    else {
        num.style.removeProperty('color')
    }
}
function upperCondition() {
    var count1 = 0
    var inpt = document.getElementById("password").value.split("")

    for ( var i = 0; i < inpt.length; i++) {
        var uppercase = inpt[i].toUpperCase()
        
        if (inpt[i]===uppercase && inpt[i].match(/[a-z]/i)) {
            count1++
        }
    }
    if (count1 > 0) {
        upper.style.color = "black"
    }
    else {
        upper.style.removeProperty('color')
    }
}
function lowerCondition() {
    var count2 = 0
    var inpt = document.getElementById("password").value.split("")

    for ( var i = 0; i < inpt.length; i++) {
        var lowercase = inpt[i].toLowerCase()
        
        if (inpt[i]===lowercase && inpt[i].match(/[a-z]/i)) {
            count2++
        }
    }
    if (count2 > 0) {
        lower.style.color = "black"
    }
    else {
        lower.style.removeProperty('color')
    }
}
function specialCondition() {
    var count3 = 0
    var inpt = document.getElementById("password").value.split("")
    var schar = ["!","@","#","$","%","^","&","*"]

    for (var i = 0; i < inpt.length; i++) {
        for ( var j = 0; j < 8; j++) {
            if (inpt[i]===schar[j]) {
                count3++
                break
            }
        }
    }
    if (count3 > 0) {
        special.style.color = "black"
    }
    else {
        special.style.removeProperty('color')
    }
}
passInput.addEventListener("keyup", charCondition);
passInput.addEventListener("keyup", numCondition);
passInput.addEventListener("keyup", upperCondition);
passInput.addEventListener("keyup", lowerCondition);
passInput.addEventListener("keyup", specialCondition);