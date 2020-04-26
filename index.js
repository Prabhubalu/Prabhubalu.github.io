
let assetsaddress = "https://prabhubalu.github.io/Assets";

// function Themefunction1(){
//     var themeIcon = document.getElementById("themeIcon");
//     console.log(`${assetsaddress}/Assets/logo.svg`);
// }


function Themefunction() {
   
var themeIcon = document.getElementById("themeIcon");
console.log(themeIcon.src);

// Background Dark
if(themeIcon.src == `${assetsaddress}/darkToggle.svg` )
{  
    var profileImage = document.getElementById("profileImage");
    profileImage.style.visibility= "hidden"
    profileImage.src = `${assetsaddress}/Prabhublack.svg`;
    setTimeout(() => {  profileImage.style.visibility= "visible" }, 70);
    

    document.body.style.backgroundColor = "#000000"
    document.body.style.color = "#ffffff"
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
    profileImage.style.visibility= "hidden"
    profileImage.src = `${assetsaddress}/Prabhuwhite.svg`;
    setTimeout(() => {  profileImage.style.visibility= "visible" }, 70);

    document.body.style.backgroundColor = "#ffffff"
    document.body.style.color = "#333333"
    themeIcon.src = `${assetsaddress}/darkToggle.svg`;

    var logoIcon = document.getElementById("logoIcon");
    logoIcon.src = `${assetsaddress}/LogoBlack.svg`;

    var navbar = document.getElementById("topbar");
    navbar.style.background="#ffffff";

    // document.getElementById("kmicon").style.fill="#333333";
}   
    
}