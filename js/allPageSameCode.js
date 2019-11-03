$(document).ready(function () {
    let isClickChevronButton = false;
    setInterval(() => {
        if (parseInt($(window).width()) > 768) {
            $(".page-main-navigation").addClass('sticky-top')
        } else {
            $(".page-main-navigation").removeClass('sticky-top')
        }
    }, 1000)
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            },
        }
    })
    $(".instagram-img").hover(function () {
        $(this).children('.content-img').children('.cover').fadeToggle();
    })

    $('.user-bucket-items').hover(function () {
        $(this).css('cursor', 'pointer');
    });
    $('.user-bucket-items').click(function (e) {
        $('.added-products-list .products').html('');
        e.stopPropagation();
        for (let f in product) {
            if (localStorage[f] != undefined && localStorage[f] != null) {
                let element = JSON.parse(localStorage[f])
                $('.added-products-list .products').append(`<div class="row justify-content-between product">
                <div class="col-4 ">
                    <img src="${element['img']}" alt="">
                </div>
                <div class="col-7">
                   <a class="product-link">${element['name']}</a>
                    <p>1x$${element['new price']}</p>
                </div>
            </div>`);
            }
        }

        $('.added-products-list').css('display', 'block');
        $('.added-products-list').addClass('zoomInRight');
        $('.added-products-list').removeClass('zoomOutRight');
    });
    $(window).click(() => {
        if ($('.added-products-list').css('display') == 'block') {

            $('.added-products-list').removeClass('zoomInRight');
            $('.added-products-list').addClass('zoomOutRight');
            setTimeout(() => {
                $('.added-products-list').css('display', 'none');
            }, 1000);
        }
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
    // $('.nav-item').hover(function () {
    //     $(this).children('.sub-menu').fadeToggle()
    // })

    $('.dropdown-button').click(function (e) {
        $('.sub-menu').slideToggle();
        $(this).css({ 'color': 'white' });
        if (!isClickChevronButton) {
            isClickChevronButton = true
            $(this).css({ 'transform': 'rotate(90deg)' });
        } else {
            isClickChevronButton = false;
            $(this).css({ 'transform': 'rotate(0deg)' });
        }

    })
    for (let f in product) {
        showProducts(product[f], `page-banner-${f}`);
        $(`.page-banner-${f} .content-img`).hover(function () {
            $(this).children('.cover').fadeToggle();
            //her defe hover olanda toogle olur om=nu duzelt
        })
    }
    setInterval(() => {
        $('.numberSpan p').text(localStorage.length);
    }, 1000);




    let pageButton = $('.add-to-cart');
    
    for (let f in pageButton) {
        
        $(pageButton[f]).click((e) => {
            e.preventDefault();
            let query;
            if (f < 4) {
                query = JSON.stringify(product[f]);
                if (localStorage[f] == undefined && localStorage[f] == null) {
                    localStorage.setItem(f, query);
                    swal({
                        title: product[f]['name'],
                        text: "is added to cart !",
                        icon: "success",
                        button: "OK",
                    });
                } else {
                    swal({
                        title: "This item already  has been existed",
                        icon: "warning",
                        button: "OK",
                    });
                }
            }
            else {
                if (localStorage[f - 4] == undefined && localStorage[f - 4] == null) {
                    query = JSON.stringify(product[f - 4]);
                    localStorage.setItem(f - 4, query);
                    swal({
                        title: product[f - 4]['name'],
                        text: "is added to cart !",
                        icon: "success",
                        button: "OK",
                    });

                } else {
                    swal({
                        title: "This item already  has been existed",
                        icon: "warning",
                        button: "OK",
                    });
                }
            }




        })
    };


})