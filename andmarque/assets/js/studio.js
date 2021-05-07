$(function(){
  //우측 중앙 스크롤값표시
  // $(window).scroll(function () {
  //   let scroll = $(window).scrollLeft();
  //   $("#scroll").text(Math.floor(scroll));

  // });

  //js


    //skrollr js 기본셋
    let s = skrollr.init({
      edgeStrategy: 'set', //스크롤 위치가 키프레임 범위 밖에 있을때 애니메이션처리:set 기본값
      easing: 'linear' //기존 기능을 덮는 객체(여유감줌)
    });
  
  });



