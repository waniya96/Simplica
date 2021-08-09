/*=====Navbar FadeIn and FadeOut====*/
$(window).scroll(function() {
  if ($(window).scrollTop() > 75) {
    $("#navBar").css("opacity", 0.25);
  } else {
    $("#navBar").css("opacity", 1);
  }
});

$(document).ready(function() {
  $("#navBar").mouseover(function() {
    $(this).css("opacity", 1);
  });

  $("#navBar").mouseleave(function() {
    if ($(window).scrollTop() > 75) {
      // this here
      $(this).css("opacity", 0.25);
    }
  });
});
/*===SMOOTH SCROLL====*/
/*====Learnmorebutton====*/

$("#button").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#aboutus").offset().top
    },
    2000
  );
});

/*====Homebuttonnav====*/
$("#homebut").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#home").offset().top
    },
    2000
  );
});

/*====Aboutbuttonnav====*/
$("#aboutbut").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#aboutus").offset().top
    },
    2000
  );
});
/*====Featuresbuttonnav====*/
$("#featurebut").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#features").offset().top
    },
    2000
  );
});
/*====Reviewbuttonnav====*/
$("#revbut").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#reviews").offset().top
    },
    2000
  );
});

/*====contactbuttonnav====*/
$("#contbut").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#contact").offset().top
    },
    2000
  );
});
/*=======Slider======*/
/*Interactivity to determine when an animated element in in view. In view elements trigger our animation*/
$(document).ready(function() {
  //window and animation items
  var animation_elements = $.find(".animation-element");
  var web_window = $(window);

  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = window_top_position + window_height;

    //iterate through elements to see if its in view
    $.each(animation_elements, function() {
      //get the element sinformation
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = element_top_position + element_height;

      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if (
        element_bottom_position >= window_top_position &&
        element_top_position <= window_bottom_position
      ) {
        element.addClass("in-view");
      } else {
        element.removeClass("in-view");
      }
    });
  }

  //on or scroll, detect elements in view
  $(window).on("scroll resize", function() {
    check_if_in_view();
  });
  //trigger our scroll event on initial load
  $(window).trigger("scroll");
});
