// Sidebar JS

$("#leftside-navigation .sub-menu > a").click(function (e) {
  $("#leftside-navigation ul ul").slideUp(),
    $(this).next().is(":visible") || $(this).next().slideDown(),
    e.stopPropagation();
});

// Sidebar JS 2

$("#sidebar-navigation .sub-navigation > a").click(function (e) {
  $("#sidebar-navigation .sub-navigation-contents").slideUp(),
    $(this).next().is(":visible") || $(this).next().slideDown(),
    e.stopPropagation();
});
