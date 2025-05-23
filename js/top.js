$(function () {
 
/*--------------------------------
  mainvisual swiper スライダーオプション
---------------------------------*/
var mySwiper03 = new Swiper('.swiper-main', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  // preventClicks: false,
  // preventClicksPropagation: false,
  pagination: false,
  navigation: false,
  scrollbar: false,
  speed: 600,
  autoplay: {
		delay: 8000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false,
	},
  pagination: {  //ページネーションを表示
    el: '.swiper-pagination',
    clickable: true,  //アイコンをクリックすると対応するスライドに移動
  }
});
    
/*--------------------------------
  into swiper スライダーオプション
---------------------------------*/
  var mySwiper04 = new Swiper('.swiper-into', {
    loop: true,
    centeredSlides: true,
    speed: 1000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },  
    slidesPerView: 4,
    spaceBetween: 0,
    pagination: {
    el: '.swiper-pagination04',
    clickable: true, 
    },
    breakpoints: {
      640: {
        loop: true,
          slidesPerView: 2,
        spaceBetween: 0,
      },
      1000: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 0,
      },
    }
  });    
    

/*--------------------------------
  quality swiper スライダーオプション
---------------------------------*/
  var mySwiper01 = new Swiper('.swiper-quality', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 40,
    // preventClicks: false,
    // preventClicksPropagation: false,
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    breakpoints: {
      640: {
        loop: false,
        slidesPerView: 1.3,
        spaceBetween: 30,
      },
      1000: {
        loop: false,
        slidesPerView: 2.3,
        spaceBetween: 30,
      },
    }
  });

/*--------------------------------
  pickup swiper スライダーオプション
---------------------------------*/
  var mySwiper02 = new Swiper('.swiper-pickup', {
    loop: false,
    slidesPerView: 4,
    spaceBetween: 30,
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    breakpoints: {
      1000: {
        loop: false,
        // centeredSlides : true,
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
    }
  });
});


//mv
// $(window).on("load rezise",function(){
//   var wh = $(this).height();
//   var ih = $(".main-visual .slide-pc .slide01 img").height();
//   $(".main-visual .slide-pc .slide01 img").css("margin-top",-(ih - wh));
// });
$(window).on("load",function(){
  $(".main-visual").addClass("on");
  setTimeout(function(){
    $(".main-visual .slide-pc .slide01").addClass("at");
    setTimeout(function(){
      $(".main-visual .txt-pc").addClass("on");
      $(".main-visual .slide-pc .slide01").removeClass("on");
      $(".main-visual .slide-pc .slide02").addClass("on");
    },5500);
  },1000);
  setTimeout(function(){
    $(".main-visual .txt-sp").addClass("on");
    $(".main-visual .slide-sp .slide01").removeClass("on");
    $(".main-visual .slide-sp .slide02").addClass("on");
  },5000);
});


//動画暗幕
	$(window).scroll(function (){
		$('.fadein_bg').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 500){
				$(this).addClass('scrollin');
			}
		});
	});  


//フェードイン
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 300){
				$(this).addClass('scrollin');
			}
		});
	});  


//フェードイン
	$(window).scroll(function (){
		$('.slidein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 500){
				$(this).addClass('scrollin');
			}
		});
	});  




$(function() {
/*--------------------------------
  top cvボタン フッターまでスクロールしたら位置変更
---------------------------------*/
var footer = $('.footerWrap').innerHeight(); // footerの高さを取得
window.onscroll = function () {
  var point = window.pageYOffset; // 現在のスクロール地点 
  var docHeight = $(document).height(); // ドキュメントの高さ
  var dispHeight = $(window).height(); // 表示領域の高さ

  if(point > docHeight-dispHeight-footer){ // スクロール地点>ドキュメントの高さ-表示領域-footerの高さ
    $('.top-cv-btn').addClass('is-hidden'); //footerより下にスクロールしたらis-hiddenを追加
  }else{
    $('.top-cv-btn').removeClass('is-hidden'); //footerより上にスクロールしたらis-hiddenを削除
  }
};

var topCvbtn = $('.top-cv-btn_fadein');
topCvbtn.hide();
if (window.matchMedia( "(min-width: 1000px)" ).matches) {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      topCvbtn.fadeIn();
    } else {
      topCvbtn.fadeOut();
    }
  });
}
});

let bnrClosed = false;

$(window).on("scroll", function () {
  if (bnrClosed) return;

  const $bnr = $('.fixed-bnr');
  if ($(this).scrollTop() > 500) {
    if (!$bnr.hasClass('fade_on')) {
      $bnr.addClass("fade_on").removeClass("fade_off");
    }
  } else {
    if (!$bnr.hasClass('fade_off')) {
      $bnr.addClass("fade_off").removeClass("fade_on");
    }
  }
});

$(document).on('click', '.fixed-bnr .close', function () {
  const $bnr = $(this).closest('.fixed-bnr');
  $bnr.fadeOut(function() {
    $bnr.removeClass("fade_on fade_off");
  });
  bnrClosed = true;
});



  