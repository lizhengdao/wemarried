/**
 * Created by weiyi on 2017/1/20.
 */

//$(function () {
//        setAudio();
//        function setAudio() {
//            var $audio = $(".radio-btn audio");
//            var $radioBtn = $(".radio-btn");
//
//            $radioBtn.rotate({
//                bind: {
//                    click: function () {
//                        $(this).rotate({
//                            angle: 0,
//                            animateTo: 180,
//                            //easing: $.easing.easeInOutExpo
//                        })
//                    }
//                }
//
//            });
//
//        }
//
//
//
//
//
//
//
//    }
// )

$(function () {
    var media = document.getElementById("media");
    var $radioBtn = $(".radio-btn");
    var isPlay=false;
    var timer;
    //rotate(180);
    $radioBtn.toggle
    $radioBtn.click(function () {
        play();
    });
    function play() {
        //alert(isPlay);
        if(isPlay){
            clearTimeout(timer);
            //alert("暂停");
            isPlay=false;
            media.pause();
        }else{
            //alert("开始");
            rotate(180);
            isPlay=true;
            media.play();
        }
    }



    function rotate(degree) {

        $radioBtn.css({
            '-webkit-transform': 'rotate(' + degree + 'deg)',
            '-moz-transform': 'rotate(' + degree + 'deg)',
            '-o-transform': 'rotate(' + degree + 'deg)',
            '-ms-transform': 'rotate(' + degree + 'deg)',
            'transform': 'rotate(' + degree + 'deg)'
        });
        timer=setTimeout(function () {
            rotate(++degree)
        }, 1);
    }


});