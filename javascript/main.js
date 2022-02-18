// @ts-nocheck
window.addEventListener('scroll', function() {
    var head = document.querySelector('.head');
    head.classList.toggle('head-change', window.scrollY > 0)


})



// jquery
/* 
=============== menu===================
*/
$('.head .fa').click(function(e) {
        e.preventDefault();

        // @ts-ignore
        if (
            $(this).css('display') === 'block'
        ) {


            if (
                $(this).hasClass('fa-bars')
            ) {
                $(this).removeClass('fa-bars').addClass('fa-close');
                $('nav ul').removeClass('hide').addClass('show')
            } else {
                $(this).removeClass('fa-close').addClass('fa-bars');
                $('nav ul').removeClass('show').addClass('hide')

            }
        } else {
            $('nav ul').removeClass('show , hide')
        }
    }






















);