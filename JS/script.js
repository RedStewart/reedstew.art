var cornSwitch = false;

function getBrowser() {
    var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return { name: 'IE', version: (tem[1] || '') };
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR|Edge\/(\d+)/)
        if (tem != null) { return { name: 'Opera', version: tem[1] }; }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) { M.splice(1, 1, tem[1]); }
    return {
        name: M[0],
        version: M[1]
    };
}

if(!(getBrowser().name === "Chrome" || getBrowser().name === "Firefox")){
    document.getElementById('fullname').innerHTML = 'Please use a different browser';
    document.getElementById('cornerElems').style.display = 'none';
    document.getElementById('divLogoImage').style.display = 'none';
    document.getElementById('mainDescrip').style.display = 'none';
}

function initSkillIconListeners() {
    var skillIcons = document.getElementsByClassName("skillIcon");
    var iconDiv = document.getElementById('iconDiv');
    var skillTextDiv = document.getElementById('iconWordDiv');
    var skillTextTitle = document.getElementById('skillsTextTitle');
    var skillText = document.getElementById('skillsTextDescrip');
    var fadeToggle = false;
    for (i = 0; i < skillIcons.length; i++) {
        skillIcons[i].addEventListener("click", function () {

            if (fadeToggle == false) {
                $(iconDiv).animate({ 'width': '35vw' }, 1000);

                setTimeout(function() {
                    $(skillTextDiv).fadeIn(500);
                    skillTextDiv.style.display = 'inline-block';
                }, 750);
                fadeToggle = true;
            }
            var activeGroup = document.querySelectorAll('.activeSkillIcon');
            var classIconFormat = this.getAttribute('class');
            var selectedIconClass = classIconFormat.replace('skillIcon ', '');
            var groupSelected = document.querySelectorAll('.' + selectedIconClass);

            for (var x = 0; x < groupSelected.length; x++) {
                groupSelected[x].classList.add('activeSkillIcon');
            }

            if (activeGroup != undefined) {
                for (var x = 0; x < activeGroup.length; x++) {
                    activeGroup[x].classList.remove('activeSkillIcon');
                }
            }

            if (selectedIconClass === 'svgJSGroup') {
                console.log('You clicked the ' + selectedIconClass + ' group');
                skillTextTitle.innerHTML = 'JavaScript';
                skillText.innerHTML =
                    "While studying I gained a large interest in JavaScript and the different areas that it has to offer." + "<br />" +
                    "I'm experienced in website based JavaScript projects, NodeJS applications, and just recently experimenting with ReactJS + Redux. " + "<br />" +
                    "In the future I'm wanting to progress from front-end work into a full stack framework i.e. the MEAN/MERN stack.";

            } else if (selectedIconClass === 'svgHTMLGroup') {
                console.log('You clicked the ' + selectedIconClass + ' group');
                skillTextTitle.innerHTML = 'HTML/CSS';
                skillText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus enim faucibus nulla bibendum, nec euismod est malesuada. Aliquam velit odio, aliquet a nisi ut, aliquet fringilla nunc.'

            } else if (selectedIconClass === 'svgPHPGroup') {
                console.log('You clicked the ' + selectedIconClass + ' group');
                skillTextTitle.innerHTML = 'PHP';
                skillText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus enim faucibus nulla bibendum, nec euismod est malesuada. Aliquam velit odio, aliquet a nisi ut, aliquet fringilla nunc.'


            } else if (selectedIconClass === 'svgOOPGroup') {
                console.log('You clicked the ' + selectedIconClass + ' group');
                skillTextTitle.innerHTML = 'Java & C#';
                skillText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus enim faucibus nulla bibendum, nec euismod est malesuada. Aliquam velit odio, aliquet a nisi ut, aliquet fringilla nunc.'


            } else if (selectedIconClass === 'svgPythonGroup') {
                console.log('You clicked the ' + selectedIconClass + ' group');
                skillTextTitle.innerHTML = 'Python';
                skillText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus enim faucibus nulla bibendum, nec euismod est malesuada. Aliquam velit odio, aliquet a nisi ut, aliquet fringilla nunc.'


            } else if (selectedIconClass === 'svgVersionGroup') {
                console.log('You clicked the ' + selectedIconClass + ' group');
                skillTextTitle.innerHTML = 'Version Control';
                skillText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus enim faucibus nulla bibendum, nec euismod est malesuada. Aliquam velit odio, aliquet a nisi ut, aliquet fringilla nunc.'


            } else {
                $(skillTextDiv).fadeOut(250);
                $(iconDiv).animate({ 'width': '65vw' }, 1000);
                setTimeout(function () {
                    skillTextDiv.style.display = 'none';
                }, 500)
                fadeToggle = false;
            }
        });
    }
}

function buttonClick(button) {
    var midContent = document.getElementById('divContent');
    var mainContent = document.getElementById('divMainContent');
    if (cornSwitch == true) {
        var cornContent = document.getElementById("cornContentContain");
        cornSwitch = false;
        console.log(cornSwitch);
        console.log("close window");
        $(midContent).animate({ 'min-height': '85vh' }, 1000);
        $(mainContent).fadeOut(1000);
        button.style.pointerEvents = 'none';
        setTimeout(function () {
            cornContent.innerHTML = "";
            button.style.pointerEvents = '';
            document.getElementById('contentDescrip').innerHTML = '';
        }, 1100);
    }
    else {
        $(midContent).animate({ 'min-height': '35vh' }, 1000);
        $(mainContent).fadeIn(1000);
        button.style.pointerEvents = 'none';
        setTimeout(function () {
            button.style.pointerEvents = '';
        }, 1000);
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
        cornContent.innerHTML = "";
        document.getElementById('mainTitle').style.display = 'none';
        document.getElementById("divMainContent").style.background = 'none';

        var aboutContentDiv = document.createElement('div');
        mainDiv.appendChild(aboutContentDiv);

        var aboutHeader = document.createElement('h4');
        aboutHeader.id = "aboutHeader"
        aboutHeader.innerHTML = "Hi, I'm Reed";
        aboutContentDiv.appendChild(aboutHeader);

        var aboutImg = document.createElement('img');
        aboutImg.id = 'aboutAva';
        aboutImg.setAttribute('src', 'Images/teeth.png');
        aboutImg.setAttribute('alt', 'Avatar');
        aboutContentDiv.appendChild(aboutImg);

        var aboutText = document.createElement('p');
        aboutText.id = 'aboutText';
        aboutText.innerHTML = "I'm a front-end web developer from Tauranga, 22 years old, and a soon to be Computer Science graduate from Waikato University.<br /> This is my website showcasing the skills that I have and personal projects that I’ve created over my time at University.<br /> Hopefully you can gain an idea on my experience with different languages and other development tools.";
        aboutContentDiv.appendChild(aboutText);
    }
    else if (cornClick == 'Skills') {
        checkTitleDisplay();
        var iconArr = [];

        cornContent.innerHTML = "";
        cornImg.src = "Images/skills.png";

        var skillWordDiv = document.createElement("div");
        skillWordDiv.id = "iconWordDiv";
        mainDiv.appendChild(skillWordDiv);

        var gearIcon = document.createElement('img');
        gearIcon.id = 'gearIcon';
        gearIcon.setAttribute('src', 'Images/gearIcon.png');
        gearIcon.setAttribute('width', '35');
        gearIcon.setAttribute('heaight', '35');

        var skillsTextTitle = document.createElement('h3');
        skillsTextTitle.id = 'skillsTextTitle';

        var skillsTextDescrip = document.createElement('p');
        skillsTextDescrip.id = 'skillsTextDescrip';

        skillWordDiv.appendChild(gearIcon);
        skillWordDiv.appendChild(skillsTextTitle);
        skillWordDiv.appendChild(skillsTextDescrip);


        var skillIconDiv = document.createElement("div");
        skillIconDiv.id = "iconDiv";
        mainDiv.appendChild(skillIconDiv);

        iconArr.push(drawSVG('svgJS', 'skillIcon svgJSGroup', 'M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z'));
        iconArr.push(drawSVG('svgNode', 'skillIcon svgJSGroup', 'M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z'));
        iconArr.push(drawSVG('svgReact', 'skillIcon svgJSGroup', 'M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z'));
        iconArr.push(drawSVG('svgHTML', 'skillIcon svgHTMLGroup', 'M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387 10.015-112.107h-109.936zm89.126 26.539l-.627 7.172-.276 3.289h-52.665000000000006l1.257 14h50.156000000000006l-.336 3.471-3.233 36.119-.238 2.27-28.196 7.749v.002l-.034.018-28.177-7.423-1.913-21.206h13.815000000000001l.979 10.919 15.287 4.081h.043v-.546l15.355-3.875 1.604-17.579h-47.698l-3.383-38.117-.329-3.883h68.939l-.33 3.539z'));
        iconArr.push(drawSVG('svgCSS', 'skillIcon svgHTMLGroup', 'M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626 10.063-112.837h-110.48zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336-28.36 7.844v.001l-.022.019-28.311-7.888-1.917-21.739h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229 1.632-18.001h-32.282999999999994l-.277-3.043-.631-7.129-.331-3.828h34.748999999999995l1.264-14h-52.926l-.277-3.041-.63-7.131-.332-3.828h69.281l-.331 3.862z'));
        iconArr.push(document.createElement('br'));
        iconArr.push(drawSVG('svgJava', 'skillIcon svgOOPGroup', 'M47.617 98.12c-19.192 5.362 11.677 16.439 36.115 5.969-4.003-1.556-6.874-3.351-6.874-3.351-10.897 2.06-15.952 2.222-25.844 1.092-8.164-.935-3.397-3.71-3.397-3.71zM80.806 87.66c-14.444 2.779-22.787 2.69-33.354 1.6-8.171-.845-2.822-4.805-2.822-4.805-21.137 7.016 11.767 14.977 41.309 6.336-3.14-1.106-5.133-3.131-5.133-3.131zM92.125 27.085c.001 0-42.731 10.669-22.323 34.187 6.024 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.793 15.634-29.58zM102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.095.171-4.45-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.952-3.487-32.013 6.85-13.742 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM85 77.896c2.395-1.634 5.703-3.053 5.703-3.053s-9.424 1.685-18.813 2.474c-11.494.964-23.823 1.154-30.012.326-14.652-1.959 8.033-7.348 8.033-7.348s-8.812-.596-19.644 4.644c-12.812 6.195 31.691 9.019 54.733 2.957zM90.609 93.041c-.108.29-.468.616-.468.616 31.273-8.221 19.775-28.979 4.822-23.725-1.312.464-2 1.543-2 1.543s.829-.334 2.678-.72c7.559-1.575 18.389 10.119-5.032 22.286zM64.181 70.069c-4.614-10.429-20.26-19.553.007-35.559 25.271-19.947 12.304-32.923 12.304-32.923 5.23 20.608-18.451 26.833-26.999 39.667-5.821 8.745 2.857 18.142 14.688 28.815zM91.455 121.817c-19.187 3.612-42.854 3.191-56.887.874 0 0 2.874 2.38 17.646 3.331 22.476 1.437 57-.8 57.816-11.436.001 0-1.57 4.032-18.575 7.231z'));
        iconArr.push(drawSVG('svgCS', 'skillIcon svgOOPGroup', 'M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6l-48.3-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4v-55.8c.1-.8 0-1.7-.4-2.6zm-53.5 70c-21.8 0-39.5-17.7-39.5-39.5s17.7-39.5 39.5-39.5c14.7 0 27.5 8.1 34.3 20l-13 7.5c-4.2-7.5-12.2-12.5-21.3-12.5-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8zm51-41.5h-3.2l-.9 4h4.1v5h-5l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.5v-5h3.5l.9-4h-4.4v-5h5.3l1.2-6h4.9l-1.2 6h3.8l1.2-6h4.8l-1.2 6h2.2v5zM102.3 66h3.8l.9-4h-3.8z'));
        iconArr.push(drawSVG('svgPhp', 'skillIcon svgPHPGroup', 'M64 33.039c-33.74 0-61.094 13.862-61.094 30.961s27.354 30.961 61.094 30.961 61.094-13.862 61.094-30.961-27.354-30.961-61.094-30.961zm-15.897 36.993c-1.458 1.364-3.077 1.927-4.86 2.507-1.783.581-4.052.461-6.811.461h-6.253l-1.733 10h-7.301l6.515-34h14.04c4.224 0 7.305 1.215 9.242 3.432 1.937 2.217 2.519 5.364 1.747 9.337-.319 1.637-.856 3.159-1.614 4.515-.759 1.357-1.75 2.624-2.972 3.748zm21.311 2.968l2.881-14.42c.328-1.688.208-2.942-.361-3.555-.57-.614-1.782-1.025-3.635-1.025h-5.79l-3.731 19h-7.244l6.515-33h7.244l-1.732 9h6.453c4.061 0 6.861.815 8.402 2.231s2.003 3.356 1.387 6.528l-3.031 15.241h-7.358zm40.259-11.178c-.318 1.637-.856 3.133-1.613 4.488-.758 1.357-1.748 2.598-2.971 3.722-1.458 1.364-3.078 1.927-4.86 2.507-1.782.581-4.053.461-6.812.461h-6.253l-1.732 10h-7.301l6.514-34h14.041c4.224 0 7.305 1.215 9.241 3.432 1.935 2.217 2.518 5.418 1.746 9.39zM95.919 54h-5.001l-2.727 14h4.442c2.942 0 5.136-.29 6.576-1.4 1.442-1.108 2.413-2.828 2.918-5.421.484-2.491.264-4.434-.66-5.458-.925-1.024-2.774-1.721-5.548-1.721zM38.934 54h-5.002l-2.727 14h4.441c2.943 0 5.136-.29 6.577-1.4 1.441-1.108 2.413-2.828 2.917-5.421.484-2.491.264-4.434-.66-5.458s-2.772-1.721-5.546-1.721z'));
        iconArr.push(drawSVG('svgPython', 'skillIcon svgPythonGroup', 'M49.33 62h29.159c8.117 0 14.511-6.868 14.511-15.019v-27.798c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191-12.355 2.181-14.453 6.751-14.453 15.176v10.817h29v4h-40.224000000000004c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53 2.075 8.642 7.03 14.659 15.515 14.659h9.946v-13.048c0-9.637 8.428-17.952 18.33-17.952zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zM122.281 48.811c-2.098-8.448-6.103-14.811-14.599-14.811h-10.682v12.981c0 10.05-8.794 18.019-18.511 18.019h-29.159c-7.988 0-14.33 7.326-14.33 15.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0 7.349-2.129 14.487-6.411 14.487-14.834v-11.126h-29v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z'));
        iconArr.push(drawSVG('svgGit', 'skillIcon svgVersionGroup', 'M124.737 58.378l-55.116-55.114c-3.172-3.174-8.32-3.174-11.497 0l-11.444 11.446 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521l-13.048-13.048-.002 34.341c.922.455 1.791 1.063 2.559 1.828 3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683.934-.933 2.014-1.638 3.167-2.11v-34.659c-1.153-.472-2.231-1.172-3.167-2.111-2.862-2.86-3.551-7.06-2.083-10.576l-14.313-14.313-37.792 37.79c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.174-3.176 3.174-8.327-.001-11.501z'));

        for(var i = 0; i < iconArr.length; i++)
            skillIconDiv.appendChild(iconArr[i]);

        initSkillIconListeners();
    }
    else if (cornClick == 'Projects') {
        cornImg.src = "Images/projects.png";
        checkTitleDisplay();
        var projectArr1 = [];
        var projectArr2 = [];


        var mainColContain = document.createElement('div');
        mainColContain.className = 'mainColContainer';
        mainDiv.appendChild(mainColContain);

        var projectContain1 = document.createElement('div');
        projectContain1.className = 'projectContain';
        mainColContain.appendChild(projectContain1);

        var projectContain2 = document.createElement('div');
        projectContain2.className = 'projectContain';
        mainColContain.appendChild(projectContain2);

        projectArr1.push(createProject('https://github.com/RedStewart/reedstew.art', 'reedstew.art', 'Reedstew', 'A simple website built using HTML, CSS, JavaScript, and minor PHP. Minpulates the dom every time a button is selected.'));
        projectArr1.push(createProject('https://github.com/RedStewart/npm-address-jig', 'npm-address-jig', 'Addyjig', 'NPM package used to alter an address entered by the user. The package uses an array of set address suffixes which will output a random option. Used when creating raffle scripts.'));
        projectArr1.push(createProject('https://github.com/RedStewart/StockX-low-price-monitor', 'StockX-low-price-monitor', 'Stockx', 'NodeJS project created to monitor certain shoes and their prices. When a shoe price drops a discord notification will be sent to users alerting them. Currently rewriting to implement Javascripts async/await.'));

        projectArr2.push(createProject('', 'Converse-OW-Raffle-Script', 'Converse', 'Script used to make multiple entries for the Converse NZ/AU website. Successfully used the script to enter around 750 entries into the Off-White Converse Chuck 70 raffle, winning 11 pairs of shoes.'));
        projectArr2.push(createProject('', 'Supply-Store-Raffle-Script', 'Supply', 'Request based script used to enter into Supply Store raffles. The script implements the npm package ‘request’ using callbacks to navigate each page. Uses a captcha service to pass each captcha widget without any user input.'));
        projectArr2.push(createProject('', 'Pokedex (Cap Harvester)', 'Pokedex', 'Pokedex - Gotta captcha them all. A captcha harvester which implements a ReactJS front end built in an Electron app and uses ExpressJS to host the captcha widget page.'));

        for(var i = 0; i < projectArr1.length; i++)
            projectContain1.appendChild(projectArr1[i]);

        for(var i = 0; i < projectArr2.length; i++)
            projectContain2.appendChild(projectArr2[i]);
    }
    else {
        cornImg.src = "Images/contact.png";
        checkTitleDisplay();

        var mainContact = document.createElement('div');
        mainContact.className = "mainContact";
        mainDiv.appendChild(mainContact);

        var contactForm = document.createElement('form');
        contactForm.className = "contactForm";
        contactForm.method = "POST";
        mainContact.appendChild(contactForm);

        var contactName = document.createElement('input');
        contactName.id = "contactName";
        contactName.className = "contactInfo contactInput";
        contactName.type = "text";
        contactName.name = "name";
        contactName.placeholder = "Name";
        contactForm.appendChild(contactName);

        var contactEmail = document.createElement('input');
        contactEmail.id = "contactEmail";
        contactEmail.className = "contactInfo contactInput";
        contactEmail.type = "text";
        contactEmail.name = "email";
        contactEmail.placeholder = "Your e-mail";
        contactForm.appendChild(contactEmail);

        var div1 = document.createElement('div');
        div1.style = "margin-top:20px;";
        contactForm.appendChild(div1);

        var contactMessage = document.createElement('textarea');
        contactMessage.id = "contactMessage";
        contactMessage.className = "contactInput";
        contactMessage.name = "message";
        contactMessage.placeholder = "Message";
        div1.appendChild(contactMessage);

        var div2 = document.createElement('div');
        div2.style = "padding: 20px 0 20px 0;";
        contactForm.appendChild(div2);

        var submitBtn = document.createElement('button');
        submitBtn.className = "submitBtn";
        submitBtn.setAttribute("onclick", "sendEmail('contactForm.php', emailCB)");
        submitBtn.type = "button";
        submitBtn.name = "submit";
        submitBtn.innerHTML = "Submit";
        div2.appendChild(submitBtn);
    }
}


function drawSVG(idName, className, path) {
    var svgJS = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgJS.setAttribute('class', className);
    svgJS.setAttribute('id', idName);
    svgJS.setAttribute('viewBox', '0 0 128 128');

    var svgJSPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svgJSPath.setAttribute('fill', '#EEEEEE')
    svgJSPath.setAttribute('d', path);

    svgJS.appendChild(svgJSPath);

    return svgJS;
}

function checkTitleDisplay() {
    if (document.getElementById('mainTitle').style.display === 'none') {
        document.getElementById('mainTitle').style.display = 'block';
        document.getElementById("divMainContent").style.background = '#2d3249';
    }
}

function createProject(link, title, iconName, description) {
    if (link != '') {
        var linkProjectItem = document.createElement('a');
        linkProjectItem.setAttribute('target', '_blank');
        linkProjectItem.setAttribute('href', link);

        var projectItem = populateProject(title, iconName, description);
        linkProjectItem.appendChild(projectItem);

        return linkProjectItem;
    } else {
        var projectItem = populateProject(title, iconName, description);

        return projectItem;
    }
}

function populateProject(title, iconName, description) {
    var project = document.createElement('div');
    project.className = 'projectItem';

    var image = document.createElement('img');
    image.className = 'projectIcon';
    image.src = 'Images/Icon' + iconName + '.png';
    image.alt = iconName + ' Icon';

    var header = document.createElement('h3');
    header.className = 'projectTitle';
    header.innerHTML = title;

    var projectText = document.createElement('p');
    projectText.innerHTML = description;

    project.appendChild(image);
    project.appendChild(header);
    project.appendChild(projectText);

    return project;
}

function sendEmail(url, callback) {
    var name = document.getElementById('contactName').value;
    var email = document.getElementById('contactEmail').value;
    var message = document.getElementById('contactMessage').value;
    var postURL = "name=" + name + "&email=" + email + "&message=" + message;

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this)
        }
    }
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhttp.send(postURL);
}

function emailCB(xhttp) {
    var response = xhttp.responseText;
    var subBtn = document.getElementsByClassName("submitBtn")[0];
    var inputArr = document.getElementsByClassName('contactInput');

    //triggered if all fields aren't complete
    if (response == 0) {
        resetInput();
        subBtn.innerHTML = "Please complete all the fields in the form";
        for (var x = 0; x < inputArr.length; x++) {
            inputArr[x].style.borderBottom = '2px solid red';
            inputArr[x].style.borderLeft = '2px solid red';
        }

    } else if (response == 1) {
        resetInput();
        subBtn.innerHTML = "Please enter a valid email";
        console.log('Please enter a valid email');
        document.getElementById('contactEmail').style.borderBottom = '2px solid red';
        document.getElementById('contactEmail').style.borderLeft = '2px solid red';

    } else if (response == 2) {
        console.log("Your email has been submitted!");
        var cornBtns = document.getElementsByClassName('cornerBtns');
        for (var i = 0; i < cornBtns.length; i++)
            cornBtns[i].style.pointerEvents = 'none';

        var inputArr = document.getElementsByClassName('contactInput');
        for (var x = 0; x < inputArr.length; x++) {
            inputArr[x].style.borderBottom = '2px solid green';
            inputArr[x].style.borderLeft = '2px solid green';
        }

        subBtn.innerHTML = 'Your email has successfully been submitted!';
        subBtn.disabled = true;
        var input = document.getElementsByClassName('contactInput');
        for (var x = 0; x < input.length; x++)
            input[x].readOnly = true;

        setTimeout(function () {
            for (var i = 0; i < cornBtns.length; i++)
                cornBtns[i].style.pointerEvents = '';
            document.getElementById('corn4').click();
        }, 4000);

    } else {
        console.log("There was an error with your email, please try again later");
        subBtn.innerHTML = 'There was an error with your email, please try again later';
        for (var x = 0; x < inputArr.length; x++) {
            inputArr[x].style.borderBottom = '2px solid red';
            inputArr[x].style.borderLeft = '2px solid red';
        }
        subBtn.disabled = true;
    }
}

function resetInput() {
    var inputArr = document.getElementsByClassName('contactInput');
    for (var x = 0; x < inputArr.length; x++) {
        inputArr[x].style.borderBottom = '2px solid #212432';
        inputArr[x].style.borderLeft = '2px solid #212432';
    }
}
