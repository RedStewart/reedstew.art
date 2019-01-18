var cornSwitch = false;

function buttonClick(button) {
    var midContent = document.getElementById('divContent');
    var mainContent = document.getElementById('divMainContent');
    if (cornSwitch == true) {
        cornSwitch = false;
        console.log(cornSwitch);
        console.log("close window");
        $(midContent).animate({ 'min-height': '85vh' }, 1000);
        $(mainContent).fadeOut(1000);
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

    }
    else {
        cornContent.innerHTML = "This is how to contact me.";
        cornImg.src = "Images/contact.png";
    }
}

