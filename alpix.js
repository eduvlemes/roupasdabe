let isMobile = window.innerWidth < 990;
let ico_user = '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 14C17 10.134 20.134 7 24 7C27.866 7 31 10.134 31 14C31 17.866 27.866 21 24 21C20.134 21 17 17.866 17 14ZM24 5C19.0294 5 15 9.02944 15 14C15 18.9706 19.0294 23 24 23C28.9705 23 33 18.9706 33 14C33 9.02944 28.9705 5 24 5ZM10.9999 36.6668C10.9999 33.5131 13.4861 31.0001 16.4999 31.0001H31.4999C34.5138 31.0001 36.9999 33.5131 36.9999 36.6668V39.0001H10.9999V36.6668ZM16.4999 29.0001C12.3341 29.0001 8.99994 32.4566 8.99994 36.6668V40.0001C8.99994 40.5524 9.44765 41.0001 9.99994 41.0001H37.9999C38.5522 41.0001 38.9999 40.5524 38.9999 40.0001V36.6668C38.9999 32.4566 35.6658 29.0001 31.4999 29.0001H16.4999Z" fill="#2E2E2E"/></svg>';
let ico_cart = '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 5C5.44772 5 5 5.44772 5 6C5 6.55228 5.44772 7 6 7L6 5ZM11 6L11.9701 5.75746C11.8589 5.3123 11.4589 5 11 5L11 6ZM38 33C38.5523 33 39 32.5523 39 32C39 31.4477 38.5523 31 38 31V33ZM42 10L42.9701 10.2425C43.0448 9.94379 42.9777 9.6273 42.7882 9.38459C42.5987 9.14187 42.3079 9 42 9V10ZM38 26V27C38.4589 27 38.8588 26.6877 38.9701 26.2425L38 26ZM6 7L11 7L11 5L6 5L6 7ZM10.0299 6.24254L11.0299 10.2425L12.9701 9.75746L11.9701 5.75746L10.0299 6.24254ZM11.0299 10.2425L15.0299 26.2425L16.9701 25.7575L12.9701 9.75746L11.0299 10.2425ZM16 25H15V27H16V25ZM15 33H38V31H15V33ZM11 29C11 31.2091 12.7909 33 15 33V31C13.8954 31 13 30.1046 13 29H11ZM15 25C12.7909 25 11 26.7909 11 29H13C13 27.8954 13.8954 27 15 27V25ZM12 11H42V9H12V11ZM41.0299 9.75746L37.0299 25.7575L38.9701 26.2425L42.9701 10.2425L41.0299 9.75746ZM38 25H16V27H38V25ZM37 40C37 40.5523 36.5523 41 36 41V43C37.6569 43 39 41.6569 39 40H37ZM36 41C35.4477 41 35 40.5523 35 40H33C33 41.6569 34.3431 43 36 43V41ZM35 40C35 39.4477 35.4477 39 36 39V37C34.3431 37 33 38.3431 33 40H35ZM36 39C36.5523 39 37 39.4477 37 40H39C39 38.3431 37.6569 37 36 37V39ZM17 40C17 40.5523 16.5523 41 16 41V43C17.6569 43 19 41.6569 19 40H17ZM16 41C15.4477 41 15 40.5523 15 40H13C13 41.6569 14.3431 43 16 43V41ZM15 40C15 39.4477 15.4477 39 16 39V37C14.3431 37 13 38.3431 13 40H15ZM16 39C16.5523 39 17 39.4477 17 40H19C19 38.3431 17.6569 37 16 37V39Z" fill="#2E2E2E"/></svg>';
let ico_mesg = '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.976 6.56285L20.9999 12.9546C21.7464 13.7473 21.7469 14.9893 21.001 15.7825L18.0891 18.8796C19.9175 24.4696 24.0065 28.9416 29.1888 31.0563L29.7691 31.2815L32.5293 28.3457C33.3045 27.5211 34.5969 27.4855 35.4159 28.266L41.4398 34.6578C42.1863 35.4504 42.1868 36.6924 41.441 37.4857L39.943 39.0789C37.2071 41.9888 33.0406 42.8089 29.3812 41.1578C24.2084 38.824 20.0344 35.9713 16.8593 32.5999C13.6841 29.2285 10.9963 24.7953 8.79573 19.3002C7.30125 15.5682 7.94946 11.3377 10.4243 8.43076L10.7431 8.07442L12.0893 6.64255C12.8646 5.81798 14.157 5.78229 14.976 6.56285Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
let ico_menu = '<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1H17M1 6H17M1 11H17" stroke="#EBA9B6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
let ico_clos = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 1L1 15M1.00001 1L15 15" stroke="#EBA9B6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
let ico_sear = '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.7071 29.2929C30.3166 28.9024 29.6834 28.9024 29.2929 29.2929C28.9024 29.6834 28.9024 30.3166 29.2929 30.7071L30.7071 29.2929ZM41.2929 42.7071C41.6834 43.0976 42.3166 43.0976 42.7071 42.7071C43.0977 42.3166 43.0977 41.6834 42.7071 41.2929L41.2929 42.7071ZM20 33C12.8203 33 7.00003 27.1797 7.00003 20H5.00003C5.00003 28.2843 11.7158 35 20 35V33ZM33 20C33 27.1797 27.1797 33 20 33V35C28.2843 35 35 28.2843 35 20H33ZM20 7C27.1797 7 33 12.8203 33 20H35C35 11.7157 28.2843 5 20 5V7ZM20 5C11.7158 5 5.00003 11.7157 5.00003 20H7.00003C7.00003 12.8203 12.8203 7 20 7V5ZM29.2929 30.7071L41.2929 42.7071L42.7071 41.2929L30.7071 29.2929L29.2929 30.7071Z" fill="#2E2E2E"/></svg>';


$(window).load(function(){
    
    $('#search-form').prependTo('#store-menu > ul');
    $('#search-form').wrap('<li class="apx_search"></li>');
    
    $('#store-menu .contacts > a > img').before('<span class="svg-ico">'+ ico_mesg +'</span>').remove();
    $('#store-menu .account > a > img').before('<span class="svg-ico">'+ ico_user +'</span>').remove();
    $('#store-menu .cart > a > img').before('<span class="svg-ico">'+ ico_cart +'</span>').remove();
    $('#search-form > img').before('<span class="svg-ico">'+ ico_sear +'</span>').remove();

    
    $('.pagina-produto .cover').closest('.span7').append('<div class="apx_share"><span>Compartilhe:</span><a class="a2a_button_whatsapp" target="_blank" href="https://wa.me/?text='+ window.location.href +'"></a><a class="a2a_button_facebook" target="_blank" href="http://www.facebook.com/share.php?u='+ window.location.href +'"></a><a class="a2a_button_twitter" target="_blank" href="https://twitter.com/intent/tweet?text='+window.location.href+'"></a><a class="a2a_button_email" target="_blank" href="mailto:?body='+window.location.href+'"></a><a class="a2a_button_sms"  target="_blank" href="sms:?body='+window.location.href+'"></a></div><script async src="https://static.addtoany.com/menu/page.js"></script>');

    $('#add-to-wishlist').appendTo('.apx_share');
    
    if(isMobile){
        $('.menu-open').append(ico_menu);
        $('.menu-close').append(ico_clos);

        $('<button type="button" onclick="$(\'.search-mobile\').slideToggle()"><img src="https://cdn.awsli.com.br/1952/1952461/arquivos/Bitmap.png"/></button>').insertAfter('#toggle-mobile'); 
        $('<a href="https://www.roupasdabe.com.br/conta/login"><img src="https://cdn.awsli.com.br/1952/1952461/arquivos/icon-user.png"/></a>').insertBefore('.carrinho-mobile'); 
        $('#toggle-mobile, #toggle-mobile + button').wrapAll('<div class="mobile-group start"></div>');
        $('.logo-mobile + a, .carrinho-mobile').wrapAll('<div class="mobile-group end"></div>');

        $('.pagina-produto .acoes-produto .comprar a[href="javascript:;"]').after('<span class="apx_popover">Por favor, selecione o tamanho desejado!</span>')

        $('.logo-mobile + .end > a:first-child > img').before('<span class="svg-ico">'+ ico_user +'</span>').remove();
        $('.carrinho-mobile').prepend('<span class="svg-ico">'+ ico_cart +'</span>');
        $('#toggle-mobile + button > img').before('<span class="svg-ico">'+ ico_sear +'</span>').remove();

        $('[for="botaoOrdenar"]').parent().insertAfter('.filtro-mobile > button');
        $('.pagina-categoria .titleBox, .pagina-busca .titleBox').insertBefore('.filtro-mobile');
        $('.filtro-mobile > button').text('filtrar por');

        let ordem_item = $('body.pagina-categoria .filtro-mobile .input-append label, body.pagina-busca .filtro-mobile .input-append label');
        if(ordem_item.text() == "Escolher ordem"){
            ordem_item.text('ordenar');
        }

        $('.product-slider').each(function(){
            let swiper_ = new Swiper(this, {
                slidesPerView:2,
                spaceBetween:10,
                loop:false,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },
                pagination: {
                    el: '.swiper-pagination',
                    type:'bullets',
                    clickable: true
                }
            });
            swiper_.destroy(true,true)
        });

       
    }else{
        $('.product-slider').each(function(){
            let swiper_ = new Swiper(this, {
                slidesPerView:4,
                spaceBetween:10,
                loop:false,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },
                pagination: {
                    el: '.swiper-pagination',
                    type:'bullets',
                    clickable: true
                }
            });
        });
        swiper_.destroy(true,true)
        $('.performa-image-vitrine img').onload(function(){
            let url = $(this).attr('data-src').replace('350x350/','550x550/');
            $(this).attr('src',url);
            $(this).attr('data-src',url);
        });
        $('.performa-image-vitrine img').each(function(){
            let url = $(this).attr('data-src').replace('350x350/','550x550/');
            $(this).attr('src',url);
            $(this).attr('data-src',url);
        })
    }
    
});