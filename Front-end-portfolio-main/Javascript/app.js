// clearing the console
console.clear();

//settings menu bar appear on click

const settings = document.getElementById("settingsCard");
const settingsI = document.querySelector(".fa-sliders-h");

settings.style.right = "-1000px";

function Settings() {
  if (settings) {
    settings.style.right = "0";
    settingsI.style.opacity = "0";
  }
}
document.querySelector(".settingsClose").addEventListener("click", () => {
  if ((settings.style.right = "0")) {
    settings.style.right = "-1000px";
    settingsI.style.opacity = "1";
  }
});

//close settings menu
//menu icon section
const navy = document.getElementById("navy");

const menubar = document
  .querySelector(".menu")
  .addEventListener("click", () => {
    if (navy) {
      navy.style.left = "0";
    }
  });

function Close() {
    if (navy) {
      navy.style.left = "-100%";
    }
}

const menuBAR = document.querySelector(".menu");
function myFunction(x) {
  x.classList.toggle("change");
}
//End menu icon section

// background setting area
let navBar = document.getElementById("navBar");
let back = document.querySelector(".area");
let black = document.querySelector(".black");
let White = document.querySelector(".pool");
let Normal = document.querySelector(".Normal");
let videoBtn = document.querySelector(".video");
let videoBack = document.querySelector(".videoBack");
let qSection = document.querySelector(".q-a-page");

function blue() {
    back.style.background = "black";
    back.style.color = "#fff";
    black.style.background = "#4bedc2";
    White.style.background = "";
    Normal.style.background = "";
    videoBack.style.height = "0";
    videoBtn.style.background = "";
    navBar.style.background = "white";
    qSection.style.background = "black";
    let x, i;
    x = document.querySelectorAll('.change-color');
    for (i = 0; i < x.length; i++){
        x[i].style.color = ""
    }

    let a, o;
    a = document.querySelectorAll('.important');
    for(o = 0; o < a.length; o++){
        a[o].style.color = ""
    }
}

function white() {
    back.style.background = "white";
    back.style.color = "#000";
    White.style.background = "#4bedc2";
    black.style.background = "";
    Normal.style.background = "";
    videoBack.style.height = "0";
    videoBtn.style.background = "";
    navBar.style.background = "black";
    qSection.style.background = "white";
    let x, i;
    x = document.querySelectorAll('.change-color');
    for (i = 0; i < x.length; i++){
        x[i].style.color = "black"
    }

    let a, o;
    a = document.querySelectorAll('.important');
    for(o = 0; o < a.length; o++){
        a[o].style.color = "deeppink"
    }
}

function norm() {
    back.style.background = "";
    White.style.background = "";
    black.style.background = "";
    Normal.style.background = "";
    back.style.color = "#000";
    videoBack.style.height = "0";
    videoBtn.style.background = "";
    navBar.style.background = "";
    qSection.style.background = "";
    let x, i;
    x = document.querySelectorAll('.change-color');
    for (i = 0; i < x.length; i++){
        x[i].style.color = ""
    }

    let a, o;
    a = document.querySelectorAll('.important');
    for(o = 0; o < a.length; o++){
        a[o].style.color = ""
    }
}

function Video() {
    videoBack.style.height = "120vh";
    videoBtn.style.background = "#4bedc2";
    White.style.background = "";
    black.style.background = "";
    Normal.style.background = "";
    navBar.style.background = "";
    let x, i;
    x = document.querySelectorAll('.change-color');
    for (i = 0; i < x.length; i++){
        x[i].style.color = ""
    }

    let a, o;
    a = document.querySelectorAll('.important');
    for(o = 0; o < a.length; o++){
        a[o].style.color = ""
    }
}
//End of background setting area

//work section
const welcomeCon = document.getElementById("welcomeContent");
welcomeCon.style.left = "50%";
const workSect = document.getElementById("workSection");
workSect.style.left = "5000px";
const aboutSect = document.querySelector(".about__container");
aboutSect.style.left = "5000px";

function navbarFun() {
  if (workSect.style.left == "5000px") {
    welcomeCon.style.left = "5000px";
    workSect.style.left = "50%";
    aboutSect.style.left = "5000px";
    settings.style.right = "-1000px";
    settingsI.style.opacity = "1";
    menuBAR.classList.remove("change");
    navy.style.left = "-100%";
  }
  if (aboutSect.style.left == "50%") {
    workSect.style.left = "5000px";
    welcomeCon.style.left = "50%";
    aboutSect.style.left = "5000px";
    settings.style.right = "-1000px";
    settingsI.style.opacity = "1";
    menuBAR.classList.remove("change");
    navy.style.left = "-100%";
  }
  if (welcomeCon.style.left == "50%") {
    workSect.style.left = "5000px";
    welcomeCon.style.left = "50%";
    aboutSect.style.left = "5000px";
    settings.style.right = "-1000px";
    settingsI.style.opacity = "1";
    menuBAR.classList.remove("change");
    navy.style.left = "-100%";
  }
}
//end work section
//home section
function home() {
  if (workSect.style.left == "50%") {
    workSect.style.left = "5000px";
    welcomeCon.style.left = "50%";
    aboutSect.style.left = "5000px";
    settings.style.right = "-1000px";
    settingsI.style.opacity = "1";
    menuBAR.classList.remove("change");
    navy.style.left = "-100%";
  }
  if (aboutSect.style.left == "50%") {
    workSect.style.left = "5000px";
    welcomeCon.style.left = "50%";
    aboutSect.style.left = "5000px";
    settings.style.right = "-1000px";
    settingsI.style.opacity = "1";
    menuBAR.classList.remove("change");
    navy.style.left = "-100%";
  }
  if (welcomeCon.style.left == "50%") {
    workSect.style.left = "5000px";
    welcomeCon.style.left = "50%";
    aboutSect.style.left = "5000px";
    settings.style.right = "-1000px";
    settingsI.style.opacity = "1";
    menuBAR.classList.remove("change");
    navy.style.left = "-100%";
  }
}
//End home section
//about section
function about() {
  if (aboutSect.style.left == "5000px") {
    aboutSect.style.left = "50%";
    workSect.style.left = "5000px";
    welcomeCon.style.left = "5000px";
    settings.style.right = "-1000px";
    settingsI.style.opacity = "1";
    menuBAR.classList.remove("change");
    navy.style.left = "-100%";
  }
  if (workSect.style.left == "50%") {
    workSect.style.left = "5000px";
    welcomeCon.style.left = "50%";
    aboutSect.style.left = "5000px";
    settings.style.right = "-1000px";
    settingsI.style.opacity = "1";
    menuBAR.classList.remove("change");
    navy.style.left = "-100%";
  }
  if (welcomeCon.style.left == "50%") {
    workSect.style.left = "5000px";
    welcomeCon.style.left = "50%";
    aboutSect.style.left = "5000px";
    settings.style.right = "-1000px";
    settingsI.style.opacity = "1";
    menuBAR.classList.remove("change");
    navy.style.left = "-100%";
  }
}
//End nav bar list function area
