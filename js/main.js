const responsive = {
    0:{
        items: 1
    },
    320:{
        items: 1
    },
    560:{
        items: 2
    },
    960:{
        items: 3
    }
}

$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    // Show and Hide the TOGGLE MENU
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })


    //Owl Carousel Projects
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    //hireme botton
    $('#hireme').click(function(){
        $('html,body').animate({
            scrollTop: $('.footer').offset().top
        }, 1000);
    })
    
    //hireme send email 
    $('#hireme2').click(function(){
        alert('Thanks, I will me back to you!')
    })
})