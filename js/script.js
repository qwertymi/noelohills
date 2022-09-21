$(document).ready(function () {

  $('html').css('overflow', 'hidden');

  let modalWrap = $('.modal-wrap');
  let modalClose = $('.modal-close');
  let modalOpen = $('.modalopen');
  let modalCloseFn = () => {
    modalWrap.stop().fadeOut(200);
    $('html').css('overflow', 'auto');
    modalOpen.show();
  }

  modalOpen.hide();
  modalClose.click(function () {
    modalCloseFn();
  });
  $('html').keydown(function (key) {
    if (key.keyCode) {
      modalCloseFn();
    }
  });

  let modalMain = $('.modal-main');
  modalMain.click(function (event) {
    event.stopPropagation();
  });
  modalWrap.click(function () {
    modalCloseFn();
  });

  modalOpen.click(function () {
    modalWrap.stop().fadeIn(200);
    $('html').css('overflow', 'hidden');
    modalOpen.hide();
  });


  // 모바일 메뉴
  let mb_div = $('.mb-div');
  let mb_bt = $('.mb-bt');
  mb_bt.click(function () {
    mb_div.show();
  });
  let mb_close = $('.mb-close');
  mb_close.click(function () {
    mb_div.hide();
  });
  mb_div.click(function () {
    mb_div.hide();
  });
  $('.mb-bg').click(function (event) {
    event.stopPropagation();
  });

  // 모바일 메뉴 기능
  let mb_menu_li = $(' .mb-menu > li ');
  $.each(mb_menu_li, function (index, item) {
    let temp = $(this).find('.mb-mainmenu');
    temp.click(function () {
      let result = temp.hasClass('mb-mainmenu-open');
      if (result == true) {
        temp.removeClass('mb-mainmenu-open');
        mb_menu_li.find('.mb-submenu').hide();
      } else {
        mb_menu_li.find('.mb-mainmenu').removeClass('mb-mainmenu-open');
        mb_menu_li.find('.mb-submenu').hide();

        temp.addClass('mb-mainmenu-open');
        mb_menu_li.eq(index).find('.mb-submenu').show();
      }
    });
  });


  $(window).resize(function () {
    let temp = $(window).width();
    if (temp >= 880) {
      mb_div.hide();
      $('.mb-mainmenu').removeClass('mb-mainmenu-open');
      $('.mb-submenu').hide();
    }
  });


});


window.onload = function () {

  let header = $('.header');
  let wrap = $('.wrap');
  let fixY = 50;

  $(window).scroll(function () {
    let temp = $(window).scrollTop();
    if (temp > fixY) {
      header.addClass('header-fix');
      wrap.addClass('wrap-fix');
    } else {
      header.removeClass('header-fix');
      wrap.removeClass('wrap-fix');
    }
  });

  let banner_close = $('.banner-close');
  banner_close.click(function () {
    fixY = 0;
    $('.banner').slideUp(300);
  });


  new Swiper('.sw-banner', {
    loop: true,
    effect: "fade",
    pagination: {
      el: '.sw-banner-pg',
      clickable: true
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    allowTouchMove: false,
  });

  new Swiper('.sw-visual', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.sw-visual-pg',
      clickable: true
    }
  });

};