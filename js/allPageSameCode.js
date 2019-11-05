
    let isClickChevronButton = false;
    setInterval(() => {
        if (parseInt($(window).width()) > 768) {
            $(".page-main-navigation").addClass('sticky-top')
        } else {
            $(".page-main-navigation").removeClass('sticky-top')
        }
    }, 1000)
    
    $(".instagram-img").hover(function () {
        $(this).children('.content-img').children('.cover').fadeToggle();
    })

    $('.footer-right-side input').focus(function () {
        let prigressBarWidth = parseInt(getComputedStyle(document.querySelector('.progress')).width)
        let interval = setInterval(() => {
            let style = parseInt(getComputedStyle(document.querySelector('.progress-bar')).width);
            style += 500;
            $('.progress-bar').css('width', `${style}px`);
            if (style > prigressBarWidth) {
                clearInterval(interval);
            }
        }, 10);
    })
    $('.footer-right-side input').blur(function () {
        let prigressBarWidth = parseInt(getComputedStyle(document.querySelector('.progress')).width)
        let interval = setInterval(() => {
            let style = parseInt(getComputedStyle(document.querySelector('.progress-bar')).width);
            console.log(style);
            style -= 500;
            $('.progress-bar').css('width', `${style}px`);
            if (style < 0) {
                clearInterval(interval);
            }
        }, 10);
    })
    $('.sendiwich-menu').click(function () {
        $('.dropdown-menu').slideDown();
        $(this).hide();
        $('.close-icon').show();
    })
    $('.close-icon').click(function () {
        $('.dropdown-menu').slideUp();
        $(this).hide();
        $('.sendiwich-menu').show();
    })

    $('.dropdown-button').click(function (e) {
        $('.dropdown-button').slideToggle();
        $(this).css({ 'color': 'white' });
        if (!isClickChevronButton) {
            isClickChevronButton = true;
            $(this).css({ 'transform': 'rotate(90deg)' });
        } else {
            isClickChevronButton = false;
            $(this).css({ 'transform': 'rotate(0deg)' });
        }

    })
    for (let f in product) {
        showProducts(product[f],f, `.page-banner-${f}`);
        $(`.page-banner-${f} .content-img`).hover(function () {
            $(this).children('.cover').fadeToggle();
            //her defe hover olanda toogle olur om=nu duzelt
        })
    }
    setInterval(() => {
        $('.numberSpan p').text(localStorage.length);
    }, 1000);

$('.nav-item').hover(function(){
    $(this).children('.sub-menu').fadeToggle();
});
   
    