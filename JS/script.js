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
    /*
        if (button.active == true) {
            console.log("close window");
            
            button.active = false;
            $(midContent).animate({ 'min-height': '85vh' }, 1000);
        }
        */
    else {

        $(midContent).animate({ 'min-height': '35vh' }, 1000);
        $(mainContent).fadeIn(1000);
        fadeInfo(button.innerHTML)        
        
        cornSwitch = true;
        console.log(cornSwitch);
    }
}

function fadeInfo(cornClick) {

    console.log("YEET " + cornClick);
    document.getElementById('heading').innerHTML = cornClick;


    
    if (cornClick == 'About') {
        console.log('This is the ' + cornClick + ' button');
        //button.style.fontSize = 25 + 'px';
    }
    else if (cornClick == 'Skills') {
        console.log('This is the ' + cornClick + ' button');
    }
    else if (cornClick == 'Projects') {
        console.log('This is the ' + cornClick + ' button');
    }
    else {
        console.log('This is the ' + cornClick + ' button');
    }
}

