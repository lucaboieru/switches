var state = true;

$(document).ready ( function () {
    
    $(".social-container").click (function () {
        if (state) {
            $(".social-switch").animate({ "background-position-x": "0"}, 300);
            state = !state;
        } else {
            $(".social-switch").animate({ "background-position-x": "-52"}, 300);
            state = !state;
        }       
    });
    
});