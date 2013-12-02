//////////////////
////LINKEDIN JS - Coming soon
///////////////////
//Pulls my public profile from linkedin to populate certain parts of my resume

//////////////////
////INFO ANCHOR TAGS
//////////////////
$('#info a').click(aTagClicked);

function aTagClicked(evt) {

    var tagID = evt.target.id;
    if(tagID === "linkedIn") {
        gaEvent("Resume", "Mouse Click", "LinkedIn Profile Anchor Clicked");
    } else if (tagID === "spektralProjects") {
        gaEvent("Resume", "Mouse Click", "Spektral Projects Anchor Clicked");
    } else if (tagID === "gitHub") {
        gaEvent("Resume", "Mouse Click", "Git Hub Anchor Clicked");
    } else {
        //It's the e-mail link
        gaEvent("Resume", "Mouse Click", "E-mail Anchor Clicked");
    }
}

//////////////////
////DETECT IF USER SCROLLED TO BOTTOM
//////////////////
var hitTheBottom = false;

$(window).scroll(scrolledToBottom);

function scrolledToBottom() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        if(hitTheBottom === false) {
            gaEvent("Resume", "Scroll Event", "User Scrolled to Bottom of Page");
            hitTheBottom = true;
        }
    }
};

///////////////////
////GA EVENT
///////////////////
function gaEvent(category, action, label, value, nonInteract) {
    //Ex. gaEvent("Main Page", "Mouse Click", "Main Page Mouse Click", 5, true);
    if (category === null) {
        throw new Error("gaEvent: Category is required.");
    }
    if(action === null) {
        throw new Error("gaEvent: Action is required.");
    }
    //Can be more detailed, aka mouseEvent, load event etc.
    label = label || null;
    value = value || null;
    //_trackEvent(category, action, label, value, nonInteraction)
    nonInteract = nonInteract || false;

    if(value === null && nonInteract === false) {
        _gaq.push(['_trackEvent', category, action, label]);
    } else {
        _gaq.push(['_trackEvent', category, action, label, value, nonInteract]);
    }
//    console.log("gaEvent: category: " + category +
//        " action: " + action +
//        " label: " + label +
//        " value: " + value +
//        " nonInteract: " + nonInteract);
};

//////////////////
////CANCEL EVENT
//////////////////
function cancelEvent(e) {
    if (e.preventDefault) {
        e.preventDefault();
    } else { e.returnValue = false; }
};
