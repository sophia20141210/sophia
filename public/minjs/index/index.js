function autoSwipe(){slideTime=setTimeout(function(){if(swipeNow<lg-1){var e=++swipeNow*wd;$sliderCon.css("transform","translateX(-"+e+"px)"),$point.removeClass("active").eq(swipeNow).addClass("active"),autoSwipe()}},2e3)}var $slider=$(".slider_block"),$sliderCon=$(".slider_container"),$point=$(".point_block"),wd=$(window).width(),lg=$slider.length,allWd=wd*lg,hg=.85*wd;$sliderCon.width(allWd),$slider.width(wd).height(hg);var swipeNow=0,slideTime;$sliderCon.on("swipeLeft",function(){if(console.log("touch left"),clearTimeout(slideTime),swipeNow<lg-1){var e=++swipeNow*wd;$sliderCon.css("transform","translateX(-"+e+"px)"),$point.removeClass("active").eq(swipeNow).addClass("active"),autoSwipe()}}),$sliderCon.on("swipeRight",function(){if(console.log("touch right"),clearTimeout(slideTime),swipeNow>0){var e=--swipeNow*wd;$sliderCon.css("transform","translateX(-"+e+"px)"),$point.removeClass("active").eq(swipeNow).addClass("active"),autoSwipe()}}),autoSwipe();var $queyrBlock=$(".query_block");$queyrBlock.on("tap",function(){var e=$(this),o=e.index();console.log(o),e.hasClass("active")?(e.removeClass("active"),$(".down-box").eq(o).hide()):($queyrBlock.removeClass("active"),e.addClass("active"),$(".down-box").hide().eq(o).show())}),$(".query_price").on("tap",function(){var e=$(this);e.hasClass("active-down")?(console.log("up"),e.removeClass("active-down").addClass("active-up")):e.hasClass("active-up")?(console.log("normal"),e.removeClass("active-up")):(console.log("down"),e.addClass("active-down"))}),$(".info-one").on("tap",function(){var e=$(this);e.hasClass("active-info")?(console.log("up"),e.removeClass("active-info").addClass("info-one")):(console.log("down"),e.removeClass("info-one").addClass("active-info"))});