var cornSwitch = false;

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
        cornContent.innerHTML = "These are the current technologies I'm familiar with:";
        cornImg.src = "Images/skills.png";

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

