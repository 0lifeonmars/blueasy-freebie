jQuery('document').ready(function($){
    /* TAGS DOM*/
    var tag_nav = $('.navbar');
    var tag_nav_item = $('a');
    var tag_nav_collapse = $('.collapse');
    var tag_filter_item = $('.filters ul li a');
    var tag_filter_all = $('.filter-all');
    var tag_filter_panoramas = $('.filter-panoramas');
    var tag_filter_portraits = $('.filter-portraits');
    var tag_filter_macro = $('.filter-macro');
    var tag_filter_journal = $('.filter-journal');

    /*FUNCTION ACTIVE*/
    function LocalActiveClass(x, y, z){
        x.on('click', function(e){ 
            y.removeClass(z);
            x.addClass(z);
        });
    };
    
    LocalActiveClass(tag_filter_all, tag_filter_item, 'item-filter-active');
    LocalActiveClass(tag_filter_panoramas, tag_filter_item, 'item-filter-active');
    LocalActiveClass(tag_filter_portraits, tag_filter_item, 'item-filter-active');
    LocalActiveClass(tag_filter_macro, tag_filter_item, 'item-filter-active');
    LocalActiveClass(tag_filter_journal, tag_filter_item, 'item-filter-active');

    /*STOP LINK*/
    tag_filter_item.on('click', function(e){
        e.preventDefault();
    });

    /* FIXED SCROLL NAVBAR */
    $(window).scroll(() => { 
        // header scroll fixed
        if ($(document).scrollTop() > 1 ) {
            tag_nav.addClass('navbar-scroll');
        } else {
            tag_nav.removeClass('navbar-scroll');
        }
    });


    $('nav a').on('click', function(e) {
        $('.navbar-collapse').collapse('hide');
    });
});