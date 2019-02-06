(function($) {

	"use strict";	

  
    $('.navigation').singlePageNav({
        currentClass : 'active',
        filter: ':not(.external)',
    });


    $('.toggle-menu').click(function(){
        $('.responsive-menu').stop(true,true).slideToggle();
        return false;
    });



})(jQuery);







