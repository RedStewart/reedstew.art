var cornSwitch = false;

var skillIcons = document.getElementsByClassName("skillIcon")
for (i = 0; i < skillIcons.length; i++) {
    skillIcons[i].addEventListener("mouseenter", function () {
        var iconID = this.id;
        //create div to display information about each language before the statments

        if (iconID == "svgJS") {
            console.log("this is javascripthurr");            

        } else if (iconID == "svgNode") {
            console.log("this is nodehurr");     

        } else if (iconID == "svgHTML") {
            console.log("this is htmlhurr");     

        } else if (iconID == "svgCSS") {
            console.log("this is csshurr");     

        } else if (iconID == "svgPhp") {
            console.log("this is phphurr");     

        } else if (iconID == "svgCS") {
            console.log("this is cshurr");     

        } else if (iconID == "svgJava") {
            console.log("this is javahurr");     

        } else if (iconID == "svgPython") {
            console.log("this is pythonhurr");     

        } else {
            console.log("this is githurr");     

        }
    }, false);
}

function buttonClick(button) {
    var midContent = document.getElementById('divContent');
    var mainContent = document.getElementById('divMainContent');
    if (cornSwitch == true) {
        var cornContent = document.getElementById("cornContentContain");
        //get the divContent and set the inner html to ""
        cornSwitch = false;
        console.log(cornSwitch);
        console.log("close window");
        $(midContent).animate({ 'min-height': '85vh' }, 1000);
        $(mainContent).fadeOut(1000);
        setTimeout(function () {
            cornContent.innerHTML = "";
        }, 1100);
    }
    else {

        $(midContent).animate({ 'min-height': '35vh' }, 1000);
        $(mainContent).fadeIn(1000);
        fadeInfo(button.innerHTML)

        cornSwitch = true;
        console.log(cornSwitch);
    }
}

function fadeInfo(cornClick) {
    document.getElementById('heading').innerHTML = cornClick;
    var cornContent = document.getElementById("contentDescrip");
    var cornImg = document.getElementById("headingImg");
    var mainDiv = document.getElementById("cornContentContain");

    if (cornClick == 'About') {
        cornContent.innerHTML = "Hello my name is Reed Stewart.";
        cornImg.src = "Images/about.png";
    }
    else if (cornClick == 'Skills') {
        cornContent.innerHTML = "";
        cornImg.src = "Images/skills.png";
        /*
                var svgJS = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                var svgJSPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                svgJS.id = "svgJS"
                svgJS.setAttribute("class", "skillIcon");
                svgJS.setAttribute("viewBox", "0 0 128 128");
                svgJSPath.setAttribute("fill", "#eeeeee")
                svgJSPath.setAttribute("d", "M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z");
        
                svgJS.appendChild(svgJSPath);
                mainDiv.appendChild(svgJS);
        */
    }
    else if (cornClick == 'Projects') {
        cornContent.innerHTML = "Over the past few years I have worked on multiple different projects and assignments, here are a few of my most recent.";
        cornImg.src = "Images/projects.png";

        //
        var projectHead1 = document.createElement("div");
        projectHead1.className = "projectText";
        mainDiv.appendChild(projectHead1);

        //
        var projectHeadText1 = document.createElement("h1");
        projectHeadText1.innerHTML = "Complete";
        projectHead1.appendChild(projectHeadText1);

        var projectList1 = document.createElement("ul");
        projectList1.className = "projectList";
        projectList1.id = "projectLeft";
        projectHead1.appendChild(projectList1);

        //
        var listItem1 = document.createElement("li");
        listItem1.innerHTML = "Converse-Off-White-Raffle-Script";
        projectList1.appendChild(listItem1);

        var listItem2 = document.createElement("li");
        var listItem2a = document.createElement("a");
        listItem2a.className = "projectsItem";
        listItem2a.target = "_blank";
        listItem2a.setAttribute("href", "https://www.npmjs.com/package/npm-address-jig");
        listItem2a.innerHTML = "npm-address-jig";
        listItem2.appendChild(listItem2a);
        projectList1.appendChild(listItem2);

        var listItem3 = document.createElement("li");
        var listItem3a = document.createElement("a");
        listItem3a.className = "projectsItem";
        listItem3a.target = "_blank";
        listItem3a.setAttribute("href", "https://github.com/RedStewart/StockX-low-price-monitor");
        listItem3a.innerHTML = "StockX-low-price-monitor";
        listItem3.style.paddingBottom = "0px";
        listItem3.appendChild(listItem3a);
        projectList1.appendChild(listItem3);

        ///
        var projectHead2 = document.createElement("div");
        projectHead2.className = "projectText";
        mainDiv.appendChild(projectHead2);

        //
        var projectHeadText2 = document.createElement("h1");
        projectHeadText2.innerHTML = "Under construction";
        projectHead2.appendChild(projectHeadText2);

        var projectList2 = document.createElement("ul");
        projectList2.className = "projectList";
        projectHead2.appendChild(projectList2);

        //
        var listItem4 = document.createElement("li");
        var listItem4a = document.createElement("a");
        listItem4a.className = "projectsItem";
        listItem4a.target = "_blank";
        listItem4a.setAttribute("href", "https://github.com/RedStewart/reedstew.art");
        listItem4a.innerHTML = "reedstew.art";
        listItem4.appendChild(listItem4a);
        projectList2.appendChild(listItem4);

        var listItem5 = document.createElement("li");
        listItem5.innerHTML = "Supply-Store-Raffle-Script";
        projectList2.appendChild(listItem5);

    }
    else {
        cornContent.innerHTML = "This is how to contact me.";
        cornImg.src = "Images/contact.png";
    }
}










//use function to draw svg using path
function drawSVG(id, path) {

}