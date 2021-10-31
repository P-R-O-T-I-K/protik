$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});


//  Function used to shrink navbar removing paddings and adding black background 

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
    } else {
        $('.nav').removeClass('affix');
    }
});
