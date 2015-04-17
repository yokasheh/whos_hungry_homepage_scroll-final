$(document).ready(function() {
/*
    (function() {
        [].slice.call(document.querySelectorAll('.tabs')).forEach(function(el) {
            new CBPFWTabs(el);
        });
    })();
*/
    //$('#main-nav').sidr();
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'easing': 'easeInOutCirc',
        'css3': false,
        'scrollingSpeed': 350,
        //'responsive': 700,
        'slidesNavigation': true,
        'slidesNavPosition': 'bottom',
        'easingcss3': 'ease',
        'navigation': true,
        'anchors': ['Home', 'Features', 'About', 'Video', 'Clients', 'Screenshots', 'Pricing', 'Download', 'Contact'],
        'navigationPosition': 'left',
        onLeave: function(index, nextIndex, direction){
            var $scrollArrow = $('.scroll-arrow');
            //after leaving section 2
            if(index == 4 && direction =='down'){
                $scrollArrow.css('opacity', 0);
            }

            else if(index == 5 && direction == 'up'){
                $scrollArrow.toggleClass("enabled");
            }
        }
    });
    $('.screenshots-content, .clients-content').css('height', $(window).height());

    var signUpInput = $(".signup-email-input");
    $('.sign-up-button').click(function(){
        $.fn.fullpage.moveTo(5);
        //This causes trouble with fullpage
		//signUpInput.focus();
    });
    $('.scroll-arrow').click(function(){
        $.fn.fullpage.moveSectionDown();
    });

/*
    $(document).mouseup(function (e) {
        if ($(".sidr-open ")[0]){
        var container = $("#sidr");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
          $(".sidr-open #main-nav").click();
        }}
    });
*/
});