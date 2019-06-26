import { fadeMainTitle, mobileProject } from './mobile.js';
import { deskSkillsBuild } from './desktop.js';


let mobileDevice = false;
if (screen.width < 400 || screen.height < 900) {
    mobileDevice = true;
}


function initSkillIconListeners() {
    var skillIcons = document.getElementsByClassName("skillIcon");
    var iconDiv = document.getElementById("iconDiv");
    var skillTextDiv = document.getElementById("iconWordDiv");
    var skillTextTitle = document.getElementById("skillsTextTitle");
    var skillText = document.getElementById("skillsTextDescrip");
    var fadeToggle = false;
    for (let i = 0; i < skillIcons.length; i++) {
        skillIcons[i].addEventListener("click", function () {
            if (fadeToggle == false) {
                $(iconDiv).animate({ width: "35vw" }, 1000);

                setTimeout(function () {
                    $(skillTextDiv).fadeIn(500);
                    skillTextDiv.style.display = "inline-block";
                }, 750);
                fadeToggle = true;
            }
            var activeGroup = document.querySelectorAll(".activeSkillIcon");
            var classIconFormat = this.getAttribute("class");
            var selectedIconClass = classIconFormat.replace("skillIcon ", "");
            var groupSelected = document.querySelectorAll(
                "." + selectedIconClass
            );

            for (var x = 0; x < groupSelected.length; x++) {
                groupSelected[x].classList.add("activeSkillIcon");
            }

            if (activeGroup != undefined) {
                for (var x = 0; x < activeGroup.length; x++) {
                    activeGroup[x].classList.remove("activeSkillIcon");
                }
            }

            if (selectedIconClass === "svgJSGroup") {
                console.log("You clicked the " + selectedIconClass + " group");
                skillTextTitle.innerHTML = "JavaScript";
                skillText.innerHTML =
                    "While studying I gained a large interest in JavaScript and the different areas that it has to offer." +
                    "<br />" +
                    "I'm experienced in website based JavaScript projects, NodeJS applications, and just recently experimenting with ReactJS + Redux. " +
                    "<br />" +
                    "In the future I'm wanting to progress from front-end work into a full stack framework i.e. the MEAN/MERN stack.";
            } else if (selectedIconClass === "svgHTMLGroup") {
                console.log("You clicked the " + selectedIconClass + " group");
                skillTextTitle.innerHTML = "HTML/CSS";
                skillText.innerHTML =
                    "Website construction using HTML5 and CSS3.";
            } else if (selectedIconClass === "svgPHPGroup") {
                console.log("You clicked the " + selectedIconClass + " group");
                skillTextTitle.innerHTML = "PHP";
                skillText.innerHTML =
                    "Minor background in PHP development, mainly using it to communicate with phpMyAdmin and MySQL.";
            } else if (selectedIconClass === "svgOOPGroup") {
                console.log("You clicked the " + selectedIconClass + " group");
                skillTextTitle.innerHTML = "Java & C#";
                skillText.innerHTML =
                    "I have experience in object oriented languages like Java and C#. I've worked with and created programs that implement different Java algorithms like an external sort merge and data compression (LZ77, LZ78). I also have experience in Android app development using Android Studio.";
            } else if (selectedIconClass === "svgPythonGroup") {
                console.log("You clicked the " + selectedIconClass + " group");
                skillTextTitle.innerHTML = "Python";
                skillText.innerHTML =
                    "Using Python and Selenium Webdriver to test out previous scripts that I've written. Also using Python for machine learning with the scikit-learn library.";
            } else if (selectedIconClass === "svgVersionGroup") {
                console.log("You clicked the " + selectedIconClass + " group");
                skillTextTitle.innerHTML = "Version Control";
                skillText.innerHTML =
                    "Experienced in git for version control and source management. Using my own GitHub page to showcase my own personal projects.";
            } else {
                $(skillTextDiv).fadeOut(250);
                $(iconDiv).animate({ width: "65vw" }, 1000);
                setTimeout(function () {
                    skillTextDiv.style.display = "none";
                }, 500);
                fadeToggle = false;
            }
        });
    }
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
    console.log(cornClick);
    document.getElementById("heading").innerHTML = cornClick;
    var cornImg = document.getElementById("headingImg");
    var mainDiv = document.getElementById("cornContentContain");

    if (cornClick == "About") {
        console.log("here");

        document.getElementById("mainTitle").style.display = "none";
        document.getElementById("divMainContent").style.background = "none";

        var aboutContentDiv = document.createElement("div");
        if (!mobileDevice) {
            aboutContentDiv.style.marginLeft = "15%";
            aboutContentDiv.style.marginRight = "15%";
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
        checkTitleDisplay();
        cornImg.src = "Images/skills.png";
        deskSkillsBuild(mainDiv);
        initSkillIconListeners();

    } else if (cornClick == "Projects") {
        if (mobileDevice) {
            console.log("yeet");
            let mainDiv = document.getElementById("cornContentContain");
            mainDiv.style.width = "95%";
            mobileProject();
        } else {
            cornImg.src = "Images/projects.png";
            checkTitleDisplay();
            var projectArr1 = [];
            var projectArr2 = [];

            var mainColContain = document.createElement("div");
            mainColContain.className = "mainColContainer";
            mainDiv.appendChild(mainColContain);

            var projectContain1 = document.createElement("div");
            projectContain1.className = "projectContain";
            mainColContain.appendChild(projectContain1);

            var projectContain2 = document.createElement("div");
            projectContain2.className = "projectContain";
            mainColContain.appendChild(projectContain2);

            projectArr1.push(
                createProject(
                    "https://github.com/RedStewart/reedstew.art",
                    true,
                    "reedstew.art",
                    "Reedstew",
                    "A simple website built using HTML, CSS, JavaScript, and minor PHP. Manipulates the dom every time a button is selected."
                )
            );
            projectArr1.push(
                createProject(
                    "https://github.com/RedStewart/npm-address-jig",
                    true,
                    "npm-address-jig",
                    "Addyjig",
                    "NPM package used to alter an address entered by the user. The package uses an array of set address suffixes which will output a random option. Used when creating raffle scripts."
                )
            );
            projectArr1.push(
                createProject(
                    "https://github.com/RedStewart/StockX-low-price-monitor",
                    true,
                    "StockX-low-price-monitor",
                    "Stockx",
                    "NodeJS project created to monitor certain shoes and their prices. When a shoe price drops a discord notification will be sent to users alerting them. Currently rewriting to implement Javascripts async/await."
                )
            );

            projectArr2.push(
                createProject(
                    "",
                    false,
                    "Converse-OW-Raffle-Script",
                    "Converse",
                    "Script used to make multiple entries for the Converse NZ/AU website. Successfully used the script to enter around 750 entries into the Off-White Converse Chuck 70 raffle, winning 11 pairs of shoes."
                )
            );
            projectArr2.push(
                createProject(
                    "",
                    false,
                    "Supply-Store-Raffle-Script",
                    "Supply",
                    "Request based script used to enter into Supply Store raffles. The script implements the npm package ‘request’ using callbacks to navigate each page. Uses a captcha service to pass each captcha widget without any user input."
                )
            );
            projectArr2.push(
                createProject(
                    "",
                    false,
                    "Pokedex (Cap Harvester)",
                    "Pokedex",
                    "Pokedex - Gotta captcha them all. A captcha harvester which implements a ReactJS front end built in an Electron app and uses ExpressJS to host the captcha widget page."
                )
            );

            for (var i = 0; i < projectArr1.length; i++)
                projectContain1.appendChild(projectArr1[i]);

            for (var i = 0; i < projectArr2.length; i++)
                projectContain2.appendChild(projectArr2[i]);
        }
    } else {
        cornImg.src = "Images/contact.png";
        checkTitleDisplay();

        var contactText = document.createElement("p");
        contactText.className = "contactText";
        contactText.innerHTML =
            "Feel free to contact me through this form and I'll get back to you as soon as possible!";
        mainDiv.appendChild(contactText);

        var mainContact = document.createElement("div");
        mainContact.className = "mainContact";
        mainDiv.appendChild(mainContact);

        var contactForm = document.createElement("form");
        contactForm.className = "contactForm";
        contactForm.method = "POST";
        mainContact.appendChild(contactForm);

        var contactName = document.createElement("input");
        contactName.id = "contactName";
        contactName.className = "contactInfo contactInput";
        contactName.type = "text";
        contactName.name = "name";
        contactName.placeholder = "Name";
        contactForm.appendChild(contactName);

        var contactEmail = document.createElement("input");
        contactEmail.id = "contactEmail";
        contactEmail.className = "contactInfo contactInput";
        contactEmail.type = "text";
        contactEmail.name = "email";
        contactEmail.placeholder = "Your e-mail";
        contactForm.appendChild(contactEmail);

        var div1 = document.createElement("div");
        div1.style = "margin-top:20px;";
        contactForm.appendChild(div1);

        var contactMessage = document.createElement("textarea");
        contactMessage.id = "contactMessage";
        contactMessage.className = "contactInput";
        contactMessage.name = "message";
        contactMessage.placeholder = "Message";
        div1.appendChild(contactMessage);

        var div2 = document.createElement("div");
        div2.style = "padding: 20px 0 20px 0;";
        contactForm.appendChild(div2);

        var submitBtn = document.createElement("button");
        submitBtn.className = "submitBtn";
        submitBtn.setAttribute(
            "onclick",
            "sendEmail('contactForm.php', emailCB)"
        );
        submitBtn.type = "button";
        submitBtn.name = "submit";
        submitBtn.innerHTML = "Submit";
        div2.appendChild(submitBtn);
    }
}

// function drawSVG(idName, className, path) {
//     var svgJS = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//     svgJS.setAttribute("class", className);
//     svgJS.setAttribute("id", idName);
//     svgJS.setAttribute("viewBox", "0 0 128 128");

//     var svgJSPath = document.createElementNS(
//         "http://www.w3.org/2000/svg",
//         "path"
//     );
//     svgJSPath.setAttribute("fill", "#EEEEEE");
//     svgJSPath.setAttribute("d", path);

//     svgJS.appendChild(svgJSPath);

//     return svgJS;
// }

function checkTitleDisplay() {
    if (document.getElementById("mainTitle").style.display === "none") {
        document.getElementById("mainTitle").style.display = "block";
        document.getElementById("divMainContent").style.background = "#2d3249";
    }
}

function createProject(link, codeAvail, title, iconName, description) {
    if (link !== "") {
        var linkProjectItem = document.createElement("a");
        linkProjectItem.setAttribute("target", "_blank");
        linkProjectItem.setAttribute("href", link);

        var projectItem = populateProject(
            title,
            codeAvail,
            iconName,
            description
        );
        linkProjectItem.appendChild(projectItem);

        return linkProjectItem;
    } else {
        var projectItem = populateProject(
            title,
            codeAvail,
            iconName,
            description
        );

        return projectItem;
    }
}

function populateProject(title, codeAvail, iconName, description) {
    var project = document.createElement("div");
    project.className = "projectItem";

    var image = document.createElement("img");
    image.className = "projectIcon code" + codeAvail.toString();
    image.src = "Images/Icon" + iconName + ".png";
    image.alt = iconName + " Icon";

    var header = document.createElement("h3");
    header.className = "projectTitle";
    header.innerHTML = title;

    var projectText = document.createElement("p");
    projectText.innerHTML = description;

    project.appendChild(image);
    project.appendChild(header);
    project.appendChild(projectText);

    return project;
}

function sendEmail(url, callback) {
    var name = document.getElementById("contactName").value;
    var email = document.getElementById("contactEmail").value;
    var message = document.getElementById("contactMessage").value;
    var postURL = "name=" + name + "&email=" + email + "&message=" + message;

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this);
        }
    };
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(postURL);
}

function emailCB(xhttp) {
    var response = xhttp.responseText;
    var subBtn = document.getElementsByClassName("submitBtn")[0];
    var inputArr = document.getElementsByClassName("contactInput");

    //triggered if all fields aren't complete
    if (response == 0) {
        resetInput();
        subBtn.innerHTML = "Please complete all the fields in the form";
        for (var x = 0; x < inputArr.length; x++) {
            inputArr[x].style.borderBottom = "2px solid red";
            inputArr[x].style.borderLeft = "2px solid red";
        }
    } else if (response == 1) {
        resetInput();
        subBtn.innerHTML = "Please enter a valid email";
        document.getElementById("contactEmail").style.borderBottom =
            "2px solid red";
        document.getElementById("contactEmail").style.borderLeft =
            "2px solid red";
    } else if (response == 2) {
        var cornBtns = document.getElementsByClassName("cornerBtns");
        for (var i = 0; i < cornBtns.length; i++)
            cornBtns[i].style.pointerEvents = "none";

        var inputArr = document.getElementsByClassName("contactInput");
        for (var x = 0; x < inputArr.length; x++) {
            inputArr[x].style.borderBottom = "2px solid green";
            inputArr[x].style.borderLeft = "2px solid green";
        }

        subBtn.innerHTML = "Your email has successfully been submitted!";
        subBtn.disabled = true;
        var input = document.getElementsByClassName("contactInput");
        for (var x = 0; x < input.length; x++) input[x].readOnly = true;

        setTimeout(function () {
            for (var i = 0; i < cornBtns.length; i++)
                cornBtns[i].style.pointerEvents = "";
            document.getElementById("corn4").click();
        }, 4000);
    } else {
        subBtn.innerHTML =
            "There was an error with your email, please try again later";
        for (var x = 0; x < inputArr.length; x++) {
            inputArr[x].style.borderBottom = "2px solid red";
            inputArr[x].style.borderLeft = "2px solid red";
        }
        subBtn.disabled = true;
    }
}

function resetInput() {
    var inputArr = document.getElementsByClassName("contactInput");
    for (var x = 0; x < inputArr.length; x++) {
        inputArr[x].style.borderBottom = "2px solid #212432";
        inputArr[x].style.borderLeft = "2px solid #212432";
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
