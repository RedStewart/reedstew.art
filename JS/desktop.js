// ########## SKILLS ##########

export const deskSkillsInit = mainDiv => {
    let skillsArr = []

    let skillsGrid = document.createElement("div")
    skillsGrid.className = "skillsGrid";
    mainDiv.appendChild(skillsGrid);

    skillsArr.push(deskSkillsBuild("skillsJS", "devicon-javascript-plain", "Javascript"));
    skillsArr.push(deskSkillsBuild("skillsJS", "devicon-nodejs-plain-wordmark", "NodeJS"));
    skillsArr.push(deskSkillsBuild("skillsJS", "devicon-react-original", "ReactJS"));
    skillsArr.push(deskSkillsBuild("skillsHTML", "devicon-html5-plain", "HTML"));
    skillsArr.push(deskSkillsBuild("skillsHTML", "devicon-css3-plain", "CSS"));
    skillsArr.push(deskSkillsBuild("skillsOOP", "devicon-java-plain", "Java"));
    skillsArr.push(deskSkillsBuild("skillsOOP", "devicon-csharp-plain", "C Sharp"));
    skillsArr.push(deskSkillsBuild("skillsPHP", "devicon-php-plain", "PHP"));
    skillsArr.push(deskSkillsBuild("skillsPyth", "devicon-python-plain", "Python"));
    skillsArr.push(deskSkillsBuild("skillsVC", "devicon-git-plain", "Git"));


    for (let i = 0; i < skillsArr.length; i++) {
        skillsGrid.appendChild(skillsArr[i]);
    }

    deskSkillsOnclick();
}

const deskSkillsBuild = (skillsClass, devIconClass, skillsTitle) => {
    let skillsIcon = document.createElement('i');
    skillsIcon.className = "devicon " + skillsClass + " " + devIconClass;

    let skillsHeader = document.createElement('span');
    skillsHeader.className = "deviconText";
    skillsHeader.innerHTML = skillsTitle;

    skillsIcon.appendChild(skillsHeader);

    return skillsIcon;
}


const deskSkillsOnclick = () => {
    let skillsArr = document.getElementsByClassName('devicon');
    for (let i = 0; i < skillsArr.length; i++) {
        skillsArr[i].onclick = e => {
            //console.log(e.target.classList[1]);
            let skillsGroupSelected = e.target.classList[1];

            let skillsGroup = document.getElementsByClassName(skillsGroupSelected);

            for (let x = 0; x < skillsGroup.length; x++) {
                skillsGroup[x].style.color = "#ffb85f";
            }
            deskCreateSkills(skillsGroupSelected)
        }
    }
}

const deskCreateSkills = selectedClass => {
    if (selectedClass === "skillsJS") {
        deskCreateLightbox("JavaScript",
            "While studying I gained a large interest in JavaScript and the different areas that it has to offer." +
            " I'm experienced in website based JavaScript projects, NodeJS applications, and just recently experimenting" +
            " with ReactJS + Redux. In the future I'm wanting to progress from front-end work into a full stack " +
            "framework i.e. the MEAN/MERN stack."
        );

    } else if (selectedClass === "skillsHTML") {
        deskCreateLightbox("HTML / CSS", "Website construction using HTML5 and CSS3.");

    } else if (selectedClass === "skillsOOP") {
        deskCreateLightbox("Java & C#", "I have experience in object-oriented languages like Java and C#. I've worked with and created programs that implement different algorithms for example sorting algorithms, data compression (Liv Zempel), NP-hard problems, and dynamic programming. I also have experience in Android app development using Android Studio.");

    } else if (selectedClass === "skillsPHP") {
        deskCreateLightbox("PHP", "Minor background in PHP backend development, mainly using it to communicate with MySQL databases.");

    } else if (selectedClass === "skillsPyth") {
        deskCreateLightbox("Python", "Using Python and Selenium Webdriver to test out previous scripts that I've written. Also using Python for machine learning with the scikit-learn library.");

    } else {
        deskCreateLightbox("Version Control", "Experienced in git for version control and source management. Using my own GitHub page to showcase my own personal projects.");
    }


}

//creates a lightbox for the class and text passed in
const deskCreateLightbox = (className, skillsText) => {
    basicLightbox.create(`
    <img class="gearIcon" src="Images/gearIcon.png">
    <h2 class="skillsTitle">` + className + `</h1>
    <p class="skillsText">` + skillsText + `</p>    
    `).show()

    let fullLbDiv = document.querySelector(".basicLightbox");
    let closeSpan = document.createElement('span')
    closeSpan.className = "lbClose";
    closeSpan.innerHTML = "x";
    fullLbDiv.appendChild(closeSpan);
}

//adds event listeners to each skill icon for hover
export const deskSkillsHoverListener = () => {
    let skillsClassArr = ["skillsJS", "skillsHTML", "skillsOOP", "skillsPHP", "skillsPyth", "skillsVC"]

    for (let x = 0; x < skillsClassArr.length; x++) {
        let classNameArr = document.getElementsByClassName(skillsClassArr[x]);

        for (let i = 0; i < classNameArr.length; i++) {
            classNameArr[i].onmouseover = function () {
                for (let i = 0; i < classNameArr.length; i++) {
                    classNameArr[i].style.color = "#ffb85f";
                    classNameArr[i].style.borderLeft = "8px solid #ffb85f";
                    classNameArr[i].style.boxShadow = "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)";
                    classNameArr[i].style.animation = "bob 1.5s infinite alternate";
                    classNameArr[i].childNodes[0].style.color = "#eeeeee";
                }
            };

            classNameArr[i].onmouseout = function () {
                for (let i = 0; i < classNameArr.length; i++) {
                    classNameArr[i].style.backgroundColor = "#161a2f";
                    classNameArr[i].style.color = "#EEEEEE";
                    classNameArr[i].style.borderLeft = "none";
                    classNameArr[i].style.boxShadow = "none";
                    classNameArr[i].childNodes[0].style.color = "#ffb85f";
                    classNameArr[i].style.animation = "none";
                }
            };
        }
    }

}

// ########## PROJECTS ##########

export const deskProjectsBuild = mainDiv => {
    let projectArr = [];

    let projectsDiv = document.createElement("div");
    projectsDiv.className = "projects";
    mainDiv.appendChild(projectsDiv);

    projectArr.push(
        deskCreateProject(
            "https://github.com/RedStewart/reedstew.art",
            true,
            "reedstew.art",
            "Reedstew",
            "A simple website built using HTML, CSS, JavaScript, and minor PHP. Manipulates the dom every time a button is selected."
        )
    );
    projectArr.push(
        deskCreateProject(
            "https://github.com/RedStewart/npm-address-jig",
            true,
            "npm-address-jig",
            "Addyjig",
            "NPM package used to alter an address entered by the user. The package uses an array of set address suffixes which will output a random option. Used when creating raffle scripts."
        )
    );
    projectArr.push(
        deskCreateProject(
            "https://github.com/RedStewart/StockX-low-price-monitor",
            true,
            "StockX-low-price-monitor",
            "Stockx",
            "NodeJS project created to monitor certain shoes and their prices. When a shoe price drops a discord notification will be sent to users alerting them. Currently rewriting to implement Javascripts async/await."
        )
    );

    projectArr.push(
        deskCreateProject(
            "",
            false,
            "Converse-OW-Raffle-Script",
            "Converse",
            "Script used to make multiple entries for the Converse NZ/AU website. Successfully used the script to enter around 750 entries into the Off-White Converse Chuck 70 raffle, winning 11 pairs of shoes."
        )
    );
    projectArr.push(
        deskCreateProject(
            "",
            false,
            "Supply-Store-Raffle-Script",
            "Supply",
            "Request based script used to enter into Supply Store raffles. The script implements the npm package ‘request’ using callbacks to navigate each page. Uses a captcha service to pass each captcha widget without any user input."
        )
    );
    projectArr.push(
        deskCreateProject(
            "",
            false,
            "Pokedex (Cap Harvester)",
            "Pokedex",
            "Pokedex - Gotta captcha them all. A captcha harvester which implements a ReactJS front end built in an Electron app and uses ExpressJS to host the captcha widget page."
        )
    );

    for (let i = 0; i < projectArr.length; i++)
        projectsDiv.appendChild(projectArr[i]);

}

const deskCreateProject = (link, codeAvail, title, iconName, description) => {
    if (link !== "") {
        let linkProjectItem = document.createElement("a");
        linkProjectItem.setAttribute("target", "_blank");
        linkProjectItem.setAttribute("href", link);

        let projectItem = deskBuildProject(
            title,
            codeAvail,
            iconName,
            description
        );
        linkProjectItem.appendChild(projectItem);

        return linkProjectItem;
    } else {
        let projectItem = deskBuildProject(
            title,
            codeAvail,
            iconName,
            description
        );

        return projectItem;
    }
}

const deskBuildProject = (title, codeAvail, iconName, description) => {
    let project = document.createElement("div");
    project.className = "projectItem";

    let image = document.createElement("img");
    image.className = "projectIcon code" + codeAvail.toString();
    image.src = "Images/Icon" + iconName + ".png";
    image.alt = iconName + " Icon";

    let header = document.createElement("h3");
    header.className = "projectTitle";
    header.innerHTML = title;

    let projectText = document.createElement("p");
    projectText.innerHTML = description;

    project.appendChild(image);
    project.appendChild(header);
    project.appendChild(projectText);

    return project;
}


// ########## CONTACT ##########

export const deskContactBuild = mainDiv => {
    let contactText = document.createElement("p");
    contactText.className = "contactText";
    contactText.innerHTML =
        "Feel free to contact me through this form and I'll get back to you as soon as possible!";
    mainDiv.appendChild(contactText);

    let mainContact = document.createElement("div");
    mainContact.className = "mainContact";
    mainDiv.appendChild(mainContact);

    let contactForm = document.createElement("form");
    contactForm.className = "contactForm";
    contactForm.method = "POST";
    mainContact.appendChild(contactForm);

    let contactName = document.createElement("input");
    contactName.id = "contactName";
    contactName.className = "contactInfo contactInput";
    contactName.type = "text";
    contactName.name = "name";
    contactName.placeholder = "Name";
    contactForm.appendChild(contactName);

    let contactEmail = document.createElement("input");
    contactEmail.id = "contactEmail";
    contactEmail.className = "contactInfo contactInput";
    contactEmail.type = "text";
    contactEmail.name = "email";
    contactEmail.placeholder = "Your e-mail";
    contactForm.appendChild(contactEmail);

    let div1 = document.createElement("div");
    div1.style = "margin-top:20px;";
    contactForm.appendChild(div1);

    let contactMessage = document.createElement("textarea");
    contactMessage.id = "contactMessage";
    contactMessage.className = "contactInput";
    contactMessage.name = "message";
    contactMessage.placeholder = "Message";
    div1.appendChild(contactMessage);

    let div2 = document.createElement("div");
    div2.style = "padding: 20px 0 20px 0;";
    contactForm.appendChild(div2);

    let submitBtn = document.createElement("button");
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