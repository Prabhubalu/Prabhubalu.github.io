// for Live
// let assetsaddress = "https://prabhubalu.com/Assets";

// for Development
let assetsaddress = "http://localhost:8080/Assets";

window.addEventListener('load', AOS.refresh)


function Themefunction() {
   
var themeIcon = document.getElementById("themeIcon");
console.log(themeIcon.src);

// Background Dark
if(themeIcon.src == `${assetsaddress}/darkToggle.svg` )
{  
    var profileImage = document.getElementById("profileImage");
    profileImage.style.visibility= "hidden";
    profileImage.src = `${assetsaddress}/Prabhublack.png`;
    setTimeout(() => {  profileImage.style.visibility= "visible" }, 70);

    document.body.style.backgroundColor = "#000000";

    var whitetext = document.getElementById("texttheme");
    whitetext.style.color="#ffffff";

    var subtext = document.getElementById("subtext");
    subtext.style.color="#ffffff";

    var higlit = document.getElementById("higlit");
    higlit.style.color = "#ffa500";

    var higlit1 = document.getElementById("higlit1");
    higlit1.style.color = "#ffa500"

    themeIcon.src = `${assetsaddress}/Sun.svg`;
   
    var logoIcon = document.getElementById("logoIcon");
    logoIcon.src = `${assetsaddress}/LogoWhite.svg`;

    var navbar = document.getElementById("topbar");
    navbar.style.background="#000000";

    // document.getElementById("kmicon").style.fill="white";


}


// Background Light
else
{
    console.log("I am in else");
    var profileImage = document.getElementById("profileImage");
    profileImage.style.visibility= "hidden";
    profileImage.src = `${assetsaddress}/prabhuwhite.png`;
    setTimeout(() => {  profileImage.style.visibility= "visible" }, 70);

    document.body.style.backgroundColor = "#ffffff"

    var maintext = document.getElementById("texttheme");
    maintext.style.color="#333333";

    var subtext = document.getElementById("subtext");
    subtext.style.color="#333333";

    var higlit = document.getElementById("higlit");
    higlit.style.color = "#0065ff"

    var higlit1 = document.getElementById("higlit1");
    higlit1.style.color = "#0065ff"

    themeIcon.src = `${assetsaddress}/darkToggle.svg`;

    var logoIcon = document.getElementById("logoIcon");
    logoIcon.src = `${assetsaddress}/LogoBlack.svg`;

    var navbar = document.getElementById("topbar");
    navbar.style.background="#ffffff";

    // document.getElementById("kmicon").style.fill="#333333";
}   
    
}