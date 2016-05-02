'use strict';

$(document).ready(init);



function init() {
    navbarListener();
    mobileScrollableContainerListener();
}


function navbarListener() {
    $('.menu .item').click(menuItemClicked);
    function menuItemClicked() {
        $('.menu .item').removeClass('active');
        $(this).not('.header').addClass('active');
    }
}

function mobileScrollableContainerListener() {
    var mobileScrollableContainerChildrenArray = $('.mobileScrollableContainer').find('.item').not('.header');
    var length = mobileScrollableContainerChildrenArray.length;
    var totalWidth = 0;
    var itemWidth = 0;
    for(var i=0;i<length; i++){
        itemWidth = $(mobileScrollableContainerChildrenArray[i]).innerWidth();
        totalWidth += itemWidth;
        // console.log('mobileScrollableContainerChildrenArray totalWidth: ', totalWidth);
    };
    // console.log('mobileScrollableContainerChildrenArray totalWidth final: ', totalWidth);

    $('.mobileScrollableContainer').css('min-width', totalWidth);

}
