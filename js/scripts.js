$(document).ready(function() {
    (function() {
        [].slice.call(document.querySelectorAll('.tabs')).forEach(function(el) {
            new CBPFWTabs(el);
        });
    })();
    $('#main-nav').sidr();
    $('#fullpage').fullpage({
        'verticalCentered': true,
        'easing': 'easeInOutCirc',
        'css3': false,
        'scrollingSpeed': 350,
        'responsive': 500,
        'slidesNavigation': true,
        'slidesNavPosition': 'bottom',
        'easingcss3': 'ease',
        'navigation': true,
        'anchors': ['Home', 'Features', 'About', 'Video', 'Clients', 'Screenshots', 'Pricing', 'Download', 'Contact'],
        'navigationPosition': 'left'
    });
    $('.screenshots-content, .clients-content').css('height', $(window).height());
    $('.scroll-arrow').click(function(){
        $.fn.fullpage.moveSectionDown();
    });

    $(document).mouseup(function (e) {
        if ($(".sidr-open ")[0]){
        var container = $("#sidr");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
          $(".sidr-open #main-nav").click();
        }}
    });
});