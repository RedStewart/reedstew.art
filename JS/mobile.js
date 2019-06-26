export const fadeMainTitle = () => {
    let mainTitleDiv = document.getElementById("divTitleLogo");
    $(mainTitleDiv).animate({ "marginTop": "-75vh" }, 1000);
}

// ########## PROJECTS ##########

export const mobileProject = () => {
    let projectArr = [];

    let mainDiv = document.getElementById("cornContentContain");
    mainDiv.style.width = "95%";

    let scrollWrapper = document.createElement("div");
    scrollWrapper.className = "scrollingWrapper row";
    mainDiv.appendChild(scrollWrapper);

    projectArr.push(buildMobileProjectItem("https://github.com/RedStewart/reedstew.art", true, "MobIconReedstew", "reedstew.art", "reedstew.art", "A simple website built using HTML, CSS, JavaScript, and minor PHP. Manipulates the dom every time a button is selected."));
    projectArr.push(buildMobileProjectItem("https://github.com/RedStewart/StockX-low-price-monitor", true, "MobIconStockx", "stockX", "StockX-low-price-monitor", "NodeJS project created to monitor certain shoes and their prices. When a shoe price drops a discord notification will be sent to usersalerting them. Currently rewriting to implement Javascripts async/await."));
    projectArr.push(buildMobileProjectItem("https://github.com/RedStewart/npm-address-jig", true, "MobIconAddyJig", "npmAddressJig", "npm-address-jig", "NPM package used to alter an address entered by the user. The package uses an array of set address suffixes which will output a random option. Used when creating raffle scripts."));

    projectArr.push(buildMobileProjectItem("", false, "MobIconConverse", "converse", "Converse-OW-Raffle-Script", "Script used to make multiple entries for the Converse NZ/AU website. Successfully used the script to enter around 750 entries into the Off-White Converse Chuck 70 raffle, winning 11 pairs of shoes."))
    projectArr.push(buildMobileProjectItem("", false, "MobIconSupply", "supplyStore", "Supply-Store-Raffle-Script", "Request based script used to enter into Supply Store raffles. The script implements the npm package ‘request’ using callbacks to navigate each page. Uses a captcha service to pass each captcha widget without any user input."))
    projectArr.push(buildMobileProjectItem("", false, "MobIconPokedex", "pokedex", "Pokedex (Cap Harvester)", "Pokedex - Gotta captcha them all. A captcha harvester which implements a ReactJS front end built in an Electron app and uses ExpressJS to host the captcha widget page."))


    projectArr.map(project => {
        scrollWrapper.appendChild(project);
    });
}

//dont need to export as only used in this file
const buildMobileProjectItem = (link, codeBool, imgSrc, altImgText, title, text) => {
    if (codeBool) {
        let aTag = document.createElement("a");
        aTag.setAttribute("target", "_blank");
        aTag.href = link;

        let project = createMobileProject(imgSrc, codeBool, altImgText, title, text)
        aTag.appendChild(project);

        return aTag;
    } else {
        let project = createMobileProject(imgSrc, codeBool, altImgText, title, text)

        return project;
    }
}

//dont need to export as only used in this file
const createMobileProject = (imgSrc, codeBool, altImgText, title, text) => {
    let projectDiv = document.createElement("div");
    projectDiv.className = "card col";

    let projectImg = document.createElement("img");
    projectImg.className = "projectImg";
    projectImg.src = "Images/" + imgSrc + ".png";
    projectImg.alt = altImgText;

    let projectTitle = document.createElement("h3");
    projectTitle.className = "projectTitleMob";
    projectTitle.innerHTML = title;

    let projectText = document.createElement("p");
    projectText.className = "projectTextMob";
    projectText.innerHTML = text;

    let projectAvail = document.createElement("div");
    if (codeBool) {
        projectAvail.className = "projectFoot codeAvail"
        projectAvail.innerHTML = "Tap & hold to view code!"
    } else {
        projectAvail.className = "projectFoot"
        projectAvail.innerHTML = "Code Unavailable!"
    }

    projectDiv.appendChild(projectImg);
    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(projectText);
    projectDiv.appendChild(projectAvail);

    return projectDiv;
}