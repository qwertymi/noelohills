// 멀티미디어 요소 로딩 전 실행
$(document).ready();
// 멀티미디어 요소 로딩 완료 후 실행
window.onload = function(){
  // 상단 배너 슬라이드
  new Swiper('.sw-banner',{
    loop: true,
    autoplay: true,
    dealy: 2500,
    disableOnIneteraction: false,
    // 페이드
    effect: "fade",
    // 드래그 슬라이딩 해제
    allowTouchMove: false,
    // 페이지네이션 
    pagination: {
      el: '.sw-banner-pg',
      clickable: true,
    }
  });

  // 비주얼 슬라이드
  new Swiper('.sw-visual',{
    loop: true,
    autoplay: true,
    dealy: 5000,
    speed: 1000,
    disableOnIneteraction: false,
    pagination: {
      el: '.sw-visual-pg',
      clickable: true
    }
  });
};
