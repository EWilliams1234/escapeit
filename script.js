function moveLeft(id, boxIncrement) {
    $(id).animate({
        left: ('-=' + toString(boxIncrement))
    });
}

function moveRight(id, boxIncrement) {
    $(id).animate({
        left: ('+=' + toString(boxIncrement))
    });
}


function moveUp(id, boxIncrement) {
    $(id).animate({
        top: ('-=' + toString(boxIncrement))
    });
}

function moveDown(id, boxIncrement) {
    $(id).animate({
        top: ('+=' + toString(boxIncrement))
    });
}


function initializeMobile() {
    for (int i = 0; i < 8; i++) {

    }
}


function setLayout() {
    $("#demo").html("being called");
    $(".movingBlock").remove();

    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();
    var isMobile = (viewportHeight < 800);

    if (isMobile) {
        var animDivWidth = viewportWidth - 100;
        var animDivHeight = viewportHeight - 180;
        $("#hero-animation").width(animDivWidth);
        $("#hero-animation").height(animDivHeight);
        $("#hero-animation").css("border", "1px solid red");
        $("#hero-animation").css("position", "absolute");
    }
}

$(window).resize(function() {
    setLayout();
});

$(document).ready(function() {
    setLayout();
});