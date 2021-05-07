$(function(){
  //우측 중앙 스크롤값표시
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    $("#scroll").text(Math.floor(scroll));

  });

    //skrollr js 기본셋
    let s = skrollr.init({
      edgeStrategy: 'set', //스크롤 위치가 키프레임 범위 밖에 있을때 애니메이션처리:set 기본값
      easing: 'linear' //기존 기능을 덮는 객체(여유감줌)
    });

    //#section1에서 fixed메뉴 글씨컬러 #fff
  
    $(window).scroll(function(){
      let scroll = $(window).scrollTop(),
          fixedM = $('.fixed'),
          lang = $('.lang'),
          mark = $('.mark'),
          ham = $('#ham');          
      if(scroll <300){
        fixedM.find('a','span').css('color','#fff');
        lang.find('span').css('color','#fff');
        mark.find('span').css('color','#fff');
        ham.find('span').css('background','#fff');
      }else{
        fixedM.find('a','span').css('color','#ff3901');
        lang.find('span').css('color','#ff3901');
        mark.find('span').css('color','#ff3901');
        ham.find('span').css('background','#ff3901');
      }
      if(scroll>1903 ){
        fixedM.find('a','span').css('color','#fff');
        lang.find('span').css('color','#fff');
        ham.find('span').css('background','#fff');   
      }      
    });
  
  });



