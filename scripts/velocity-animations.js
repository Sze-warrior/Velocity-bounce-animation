$(document).ready(function(){

    var introContainer = $('.intro-container').children();

    //introContainer.velocity({opacity:0}, {duration:1});
    introContainer.velocity("transition.expandIn", {stagger:250, delay: 400});

});