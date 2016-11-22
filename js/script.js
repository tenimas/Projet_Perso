$(document).ready(function(){

  $(window).scroll(function(){
    // console.log("ok");
    var bottomOfWindow = $(window).scrollTop() + $(window).height();

    $("#whoIAm").each(function(i){

      var bottomDivPre = $(this).offset().top + $(this).outerHeight();

      if (bottomOfWindow > bottomDivPre) {
        $("#background").removeClass("background1");
        $("#background").addClass("background2");

      }

      if ($("#background").hasClass("background2")) {
        if (bottomOfWindow < bottomDivPre) {
          $("#background").removeClass("background2");
          $("#background").addClass("background1");
        }
      }
    });

    $("#repere").each(function(i){

      var bottomDivPre = $(this).offset().top + $(this).outerHeight();
      if ($("#nav-item").hasClass("dark")) {
        if (bottomOfWindow > bottomDivPre) {
        $("#nav-item").removeClass("dark");
        $("#nav-item").addClass("red");
      }
    }

      if ($("#nav-item").hasClass("red")) {
        if (bottomOfWindow < bottomDivPre) {
          $("#nav-item").removeClass("red");
          $("#nav-item").addClass("dark");
        }
      }
    });

    $("#repere2").each(function(i){

      var bottomDivPre2 = $(this).offset().top + $(this).outerHeight();
      if ($("#nav-item").hasClass("red")) {
      if (bottomOfWindow > bottomDivPre2) {
        $("#nav-item").removeClass("red");
        $("#nav-item").addClass("green");

      }
      }

      if ($("#nav-item").hasClass("green")) {
        if (bottomOfWindow < bottomDivPre2) {
          $("#nav-item").removeClass("green");
          $("#nav-item").addClass("red");
        }
      }
    });

    $("#repere3").each(function(i){

      var bottomDivPre3 = $(this).offset().top + $(this).outerHeight();

      if ($("#nav-item").hasClass("green")) {
      if (bottomOfWindow > bottomDivPre3) {
        $("#nav-item").removeClass("green");
        $("#nav-item").addClass("blue");

      }
      }

      if ($("#nav-item").hasClass("blue")) {
        if (bottomOfWindow < bottomDivPre3) {
          $("#nav-item").removeClass("blue");
          $("#nav-item").addClass("green");
        }
      }
    });



  });
});
