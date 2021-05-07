$(function () {
  //skrollr js 기본셋
  let s = skrollr.init({
    edgeStrategy: 'set',
    easing: 'linear'
  });
  //좌측중앙 스크롤값표시

  // $(window).scroll(function () {
  //   let scroll = $(window).scrollTop();
  //   $("#scroll").text(Math.floor(scroll));
  // });
  //nav 클릭시 메뉴
  let navLi = $(".nav > ul > li");
  navLi.click(function () {
    $(this).find('ul').slideToggle();
  });
  let contact = $(".information > span");
  contact.click(function () {
    $(".information > p").fadeToggle(1000);
  });
  //nav 스크롤시 축소
  $(window).scroll(function(){
    let  $mainHeader = $('.header'),
      $defaultLogo = $('.logo > h1');
    if($(this).scrollTop() >50){
      if(!$mainHeader.hasClass('shrink')){
      $mainHeader.addClass('shrink');
      $mainHeader.parent('div').parent('header').css('background',"rgba(255,255,255,0.2)");
      $defaultLogo.addClass('small');  
      }
    }else{
        if($mainHeader.hasClass('shrink')){
      $mainHeader.removeClass('shrink');
      $mainHeader.parent('div').parent('header').css('background',"none");
      $defaultLogo.removeClass('small');          
      }
    }
  });
  });