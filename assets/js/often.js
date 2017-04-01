var s = skrollr.init();

$(window).scroll(function(evt){
  if ($(window).scrollTop()>0)
    $("#topbar-inner").removeClass("nav_top")
  else
 $("#topbar-inner").addClass("nav_top")

});
