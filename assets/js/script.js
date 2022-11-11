$(document).ready(function(){
    $('.header-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    
    $('.msg-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });


    $('.navbar-show-btn').click(() => {
        $('.pg-navbar-collapse').addClass('show-pg-navbar-collapse');
    });

    $('.navbar-hide-btn').click(() => {
        $('.pg-navbar-collapse').removeClass('show-pg-navbar-collapse');
    });

    const tabBtns = $('.tab-btn');
    const tabBodys = $('.tab-body');

    $.each(tabBtns, function(idx, tabBtn){
        $(tabBtn).click(function(){
            $.each(tabBodys, function(key, tabBody){
                if(idx == key){
                    resetActiveTabBtn();
                    resetActiveTabBody();
                    $(tabBtn).addClass('tab-btn-active');
                    $(tabBody).addClass('tab-body-active');
                }
            });
        });
    });

    function resetActiveTabBtn(){
        $.each(tabBtns, function(idx, tabBtn){
            $(tabBtn).removeClass('tab-btn-active');
        });
    }

    function resetActiveTabBody(){
        $.each(tabBodys, function(idx, tabBody){
            $(tabBody).removeClass('tab-body-active');
        });
    }

});