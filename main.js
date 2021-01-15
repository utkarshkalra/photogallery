

function toggling() {
    // console.log('hi');
    var element = document.getElementById("me");
    document.getElementById("bar").classList.toggle("iconcolor")
    element.classList.toggle("dropdown");
}
const responsive={
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    },
    1260:{
        items:4
    }
}
$(document).ready(function(){

    $('.owl-carousel').owlCarousel(
        {
            loop:true,
            autoplay:false,
            autoplayTimeout: 3000,
            dots:false,
            nav:true,
            navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
            responsive: responsive
        }
    );

    //scrollup
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },300);
    })

    //aos instance
    AOS.init();

});