$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsiveClass:true,
    autoplay:true,
    navText:['<i class="bi bi-arrow-left-square"></i>','<i class="bi bi-arrow-right-square"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})

