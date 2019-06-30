import { fadeMainTitle, mobileProject } from './mobile.js';
import { deskProjectsBuild, deskContactBuild, deskSkillsInit, deskSkillsHoverListener } from './desktop.js';


let mobileDevice = false;
if (screen.width < 400 || screen.height < 900) {
    mobileDevice = true;
}

const cornerButtons = document.getElementsByClassName('cornerBtns');
for (let i = 0; i < cornerButtons.length; i++) {
    cornerButtons[i].addEventListener('click', function () { buttonClick(this) });
}


var currBtn;
var cornSwitch = false;
function buttonClick(button) {
    if (mobileDevice)
        fadeMainTitle();

    var midContent = document.getElementById("divContent");
    var mainContent = document.getElementById("divMainContent");

    //no button is set, nmothing is showing
    if (currBtn === undefined) {
        currBtn = button;

        fadeInfo(button.innerHTML);

        if (mobileDevice) {
            $(midContent).animate({ "min-height": "7.5vh" }, 1000);
        } else {
            $(midContent).animate({ "min-height": "35vh" }, 1000);
        }

        $(mainContent).fadeIn(1000);
        button.style.pointerEvents = "none";
        setTimeout(function () {
            button.style.pointerEvents = "";
        }, 1000);
        cornSwitch = true;
    } else {
        //same button clicked
        if (currBtn.innerHTML == button.innerHTML) {
            var cornContent = document.getElementById("cornContentContain");
            cornSwitch = false;

            if (mobileDevice) {
                $(midContent).animate({ "min-height": "160vh" }, 1000);
            } else {
                $(midContent).animate({ "min-height": "85vh" }, 1000);
            }


            $(mainContent).fadeOut(1000);
            button.style.pointerEvents = "none";
            setTimeout(function () {
                cornContent.innerHTML = "";
                button.style.pointerEvents = "";
            }, 1100);

            currBtn = undefined;
        } else {
            //fade in the info
            currBtn = button;
            var cornContent = document.getElementById("cornContentContain");

            $(mainContent).fadeOut(1000, function () {
                cornContent.innerHTML = "";
                fadeInfo(button.innerHTML);
                $(mainContent).fadeIn(1000);
            });
            button.style.pointerEvents = "none";
            setTimeout(function () {
                button.style.pointerEvents = "";
            }, 1100);
        }
    }
}

function fadeInfo(cornClick) {
    document.getElementById("heading").innerHTML = cornClick;
    let cornImg = document.getElementById("headingImg");
    let mainDiv = document.getElementById("cornContentContain");

    if (cornClick == "About") {
        document.getElementById("mainTitle").style.display = "none";
        document.getElementById("divMainContent").style.background = "none";

        var aboutContentDiv = document.createElement("div");
        if (!mobileDevice) {
            aboutContentDiv.style.marginLeft = "15%";
            aboutContentDiv.style.marginRight = "15%";
            mainDiv.style.width = "65%"
        }
        mainDiv.appendChild(aboutContentDiv);

        var aboutHeader = document.createElement("h4");
        aboutHeader.id = "aboutHeader";
        aboutHeader.innerHTML = "Hi, I'm Reed";
        aboutContentDiv.appendChild(aboutHeader);

        var aboutImg = document.createElement("img");
        aboutImg.id = "aboutAva";
        aboutImg.setAttribute("src", "Images/teeth.png");
        aboutImg.setAttribute("alt", "Avatar");
        aboutContentDiv.appendChild(aboutImg);

        var aboutText = document.createElement("p");
        aboutText.id = "aboutText";
        aboutText.innerHTML =
            "I'm a Web Developer from Tauranga, 22 years old, and a soon to be Computer Science graduate from Waikato University. This is my website showcasing the skills that I have and personal projects that I’ve created over my time at University. Hopefully you can gain an idea of my experience with different languages and other development tools.";
        aboutContentDiv.appendChild(aboutText);
    } else if (cornClick == "Skills") {
        cornImg.src = "Images/skills.png";
        checkTitleDisplay();
        deskSkillsInit(mainDiv);
        deskSkillsHoverListener();
        if (mobileDevice)
            mainDiv.style.width = "62%";

    } else if (cornClick == "Projects") {
        cornImg.src = "Images/projects.png";
        checkTitleDisplay();
        if (mobileDevice) {
            setMobileMargin();
            mobileProject();
        } else {
            deskProjectsBuild(mainDiv);
        }
    } else {
        cornImg.src = "Images/contact.png";
        checkTitleDisplay();
        deskContactBuild(mainDiv);

        if (mobileDevice) {
            setMobileMargin();
            let contactInputArr = document.getElementsByClassName("contactInfo");
            for (let i = 0; i < contactInputArr.length; i++) {
                contactInputArr[i].style.width = "43%";
            }
            document.getElementById("contactMessage").style.width = "93%";
        }
    }
}

const checkTitleDisplay = () => {
    if (document.getElementById("mainTitle").style.display === "none") {
        document.getElementById("mainTitle").style.display = "block";
        document.getElementById("divMainContent").style.background = "#2d3249";
    }
}

function getBrowser() {
    var ua = navigator.userAgent,
        tem,
        M =
            ua.match(
                /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
            ) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return { name: "IE", version: tem[1] || "" };
    }
    if (M[1] === "Chrome") {
        tem = ua.match(/\bOPR|Edge\/(\d+)/);
        if (tem != null) {
            return { name: "Opera", version: tem[1] };
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
    }
    return {
        name: M[0],
        version: M[1]
    };
}

if (getBrowser().name === "IE") {
    document.getElementById("fullname").innerHTML =
        "Please use a different browser";
    document.getElementById("cornerElems").style.display = "none";
    document.getElementById("divLogoImage").style.display = "none";
    document.getElementById("mainDescrip").style.display = "none";
}

const setMobileMargin = () => { document.getElementById("cornContentContain").style.width = "95%"; }


