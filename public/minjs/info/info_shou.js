$(".info-one").on("tap",function(){var o=$(this);o.hasClass("active-info")?(console.log("up"),o.removeClass("active-info").addClass("info-one")):(console.log("down"),o.removeClass("info-one").addClass("active-info"))});