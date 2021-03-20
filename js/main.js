$(function () {

    /* 남성,여성 all제품이너무많아서 슬라이스해놈 */
    $('#all_product li.item').slice(8, 61).hide()

    $('.more_product').click(function (e) {
        e.preventDefault()
        $('#all_product li.item:hidden').slice(0, 8).show()

        if ($('#all_product li.item:hidden').length == 0) {
            $('.more_product').hide()
        }
    })


    /* 카테고리 상품 필터 와 more버튼 */

    $('.c_left li').click(function (e) {
        e.preventDefault()

        var data = $(this).attr('data-filter')

        if (data == 'ALL') {
            $('.item_box .item').fadeIn(2000)

            $('.more_product').show()
            $('#all_product li.item').slice(8, 61).hide()

            $('.more_product').click(function (e) {
                e.preventDefault()
                $('#all_product li.item:hidden').slice(0, 8).show()

                if ($('#all_product li.item:hidden').length == 0) {
                    $('.more_product').hide()
                }
            })
        } else {
            $('.item_box .item').not('.' + data).fadeOut(2000)
            $('.item_box .item').filter('.' + data).fadeIn(2000)
            $('.more_product').hide()
        }
    })



    /* 필터 내부 세부사항 클릭  종류,색상 등등*/
    $('.sort ul li').click(function (e) {
        e.preventDefault()
        
        var idx = $(this).index()

        $(this).siblings().removeClass('active')
        $(this).addClass('active')

    })

    $('.sort_p ul li').click(function (e) {
        e.preventDefault()
        
        var idx = $(this).index()

        $(this).siblings().removeClass('active')
        $(this).addClass('active')
    })

    $('.sort_c ul li').click(function (e) {
        
        e.preventDefault()
        
        var idx = $(this).index()

        $(this).siblings().removeClass('active')
        $(this).addClass('active')
    })



    /* 필터 오픈 */

    $('.p_categories .c_right li a').eq(0).click(function (e) {
        
        e.preventDefault()

        $('.p_search').removeClass('active')

        if ($('.p_filter').hasClass('active')) {
            $('.p_filter').removeClass('active')
            $('.p_filter ul li').removeClass('active')
        } else {
            $('.p_filter').addClass('active')
            $('.p_filter ul li').removeClass('active')
        }
    })

    /* 검색 오픈 */

    $('.p_categories .c_right li a').eq(1).click(function (e) {
        
        e.preventDefault()

        $('.p_filter').removeClass('active')

        if ($('.p_search').hasClass('active')) {
            $('.p_search').removeClass('active')
        } else {
            $('.p_search').addClass('active')
        }
    })

    /* 쇼핑계속하기 */
    $('.visual .v_desc a').click(function () {
        var moveMain = $('main').offset().top - 100
        $('html,body').stop().animate({
            scrollTop: moveMain
        })
    })


    /* 서브상품페이지 이미지 변경 */
    $('.p_img ul li').mouseenter(function (e) {
        e.preventDefault()
        var idx = $(this).index()
        var imgChange = $(this).find('img').attr('src')

        $('.p_bimg img').attr('src', imgChange)
    })


    /* login*/

    $('.login form a').click(function (e) {
        e.preventDefault()
        $('.login').toggleClass('active')
    })


    /* shopping_cart 클릭시 */
    $('.header_list_right li').eq(1).click(function () {

        $('#cart').addClass('active')
        $('.cart_modal').addClass('active')


        $('.cart_modal').click(function () {
            $('#cart').removeClass('active')
            $('.cart_modal').removeClass('active')
        })


        $('.shopping_cart .close .s_close_btn').click(function () {
            $('#cart').removeClass('active')
            $('.cart_modal').removeClass('active')
        })

        $('.shopping_btn .c_shopping').click(function () {
            $('#cart').removeClass('active')
            $('.cart_modal').removeClass('active')
        })
    })


    /* 사용자가 스크롤할때  헤더 메인배경이랑 구분하기 위해서 */
    $(window).scroll(function () {
        var win_s = $(this).scrollTop()

        if (win_s == 0) {
            $('header').css('box-shadow', 'none')
        } else {
            $('header').css('box-shadow', '0 1px 3px rgba(0,0,0,0.5)')
        }
    })

    /* 마우스올렸을떄 */

    $('.men').mouseenter(function () {

        var win_w = $(window).outerWidth()

        if (win_w > 960) {
            $('.header').addClass('active')
            $(this).find('.men_cloth').css({
                top: '77px',
                zIndex: 2
            })
            $(this).addClass('active')
        }
    })

    $('.men').mouseleave(function () {

        var win_w = $(window).outerWidth()

        if (win_w > 960) {
            $('.header').removeClass('active')
            $(this).find('.men_cloth').css({
                top: '-9999px',
                zIndex: 'auto',
            })
            $(this).removeClass('active')
        }
    })

    $('.women').mouseenter(function () {

        var win_w = $(window).outerWidth()

        if (win_w > 960) {
            $('.header').addClass('active')
            $(this).find('.women_cloth').css({
                top: '77px',
                zIndex: 2
            })
            $(this).addClass('active')
        }
    })

    $('.women').mouseleave(function () {

        var win_w = $(window).outerWidth()

        if (win_w > 960) {
            $('.header').removeClass('active')
            $(this).find('.women_cloth').css({
                top: '-9999px',
                zIndex: 'auto',
            })
            $(this).removeClass('active')
        }
    })

    /* 햄버거 클릭시 */

    $('.hamburger').click(function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open')
            $('.header_list_left').removeClass('open')
            $('.header .modal_overlay').hide()


        } else {
            $(this).addClass('open')
            $('.header_list_left').addClass('open')
            $('.header .modal_overlay').show()
        }

        $(window).resize(function () {
            var win_w = $(window).outerWidth()

            if (win_w > 960) {
                $('.hamburger').removeClass('open')
                $('.header_list_left').removeClass('open')
                $('.header_list_left>ul>li').removeClass('open')
                $('.header .modal_overlay').hide()
            }
        })

    })

    $('.header_list_left>ul>li').click(function () {
        $(this).siblings().removeClass('open')
        $(this).addClass('open')
    })


    $('.header .modal_overlay').click(function () {
        $('.hamburger').removeClass('open')
        $('.header_list_left').removeClass('open')
        $('.header_list_left>ul>li').removeClass('open')
        $('.header .modal_overlay').hide()

    })

    /* visual */
    $(window).resize(function () {
        var win_w = $(window).outerWidth()

        if (win_w < 960) {
            $('#visual').css('top', '93px')
            $('#login').css('top', '93px')
        }

        if (win_w > 960) {
            $('#visual').css('top', '77px')
            $('#login').css('top', '77px')
        }
    })


    /* 슬라이더 */

    $('.user-review').slick({
        slidesToShow: 3,
        autoplay: false,
        autoplaySpeed: 1000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
          ]
    });


    /* top_btn 버튼 */


    $(window).scroll(function () {
        if ($(this).scrollTop() >= 500) {
            $('.top_btn').addClass('active')
        } else {
            $('.top_btn').removeClass('active')
        }

        $('.top_btn').click(function (e) {
            $('html,body').stop().animate({
                scrollTop: '0'
            })

        })
    })


})
