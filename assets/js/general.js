jQuery(document).foundation();

jQuery(document).ready(function(){

    var currentlyScrolled;

    jQuery(window).scroll(function(){

        var header = jQuery('header');
        currentlyScrolled = jQuery(this).scrollTop();

        //Apply Sticky Header
        if( currentlyScrolled > 0){
            header.addClass('sticky');
        }
        else
        {
            header.removeClass();
        }

        if( jQuery(this).scrollTop() > 100)
        {
            jQuery('.backtotop').stop().animate({'right':'0'});
        }
        else
        {
            jQuery('.backtotop').stop().animate({'right':'-40px'});
        }

    });

});

jQuery(window).load(function(){
    //Parallax Animation
    jQuery('section[data-type="background"]').each(function(){
            var $bgobj = $(this); // assigning the object

            jQuery(window).scroll(function() {
                            var yPos = -(jQuery(window).scrollTop() / $bgobj.data('speed'));

                            // Put together our final background position
                            var coords = '50% '+ yPos + 'px';

                            // Move the background
                            $bgobj.css({ backgroundPosition: coords });
            });
    });

    //Input Placeholders
    jQuery(".defaultText").focus(function(srcc)
      {
          if (jQuery(this).val() == jQuery(this)[0].title)
          {
              jQuery(this).removeClass("defaultTextActive");
              jQuery(this).val("");
          }
      });

      jQuery(".defaultText").blur(function()
      {
          if (jQuery(this).val() == "")
          {
              jQuery(this).addClass("defaultTextActive");
              jQuery(this).val($(this)[0].title);
          }
      });

      jQuery(".defaultText").blur();

    function banner(){
        //Banner Initialization
        if(jQuery('section.slides .slider img').length > 1){

            var slider = jQuery('section.slides .slider');

            slider.trigger("destroy");

            slider.carouFredSel({
                items  : {
                    visible         : 1
                },
                direction           : "left",

                scroll : {
                    items           : 1,
                    fx              : "crossfade",
                    easing          : "linear",
                    duration        : 1000,
                    pauseOnHover    : true
                },
                prev : {
                    button          : 'section.slides .sliderHolder .bannerNav a.prev'
                },
                next : {
                    button          : 'section.slides .sliderHolder .bannerNav a.next'
                },
                auto : {
                    play            : false
                },
                responsive          : true
            });

        }
        else
        {
            jQuery('section.slides .sliderHolder .bannerNav a').css({'display':'none'});
        }
    }

    banner();


      function memberSlider(){
        //Member Slider
        if(jQuery('section.team .slider .sliderholder .member').length > 0){

            jQuery('section.team .slider .sliderholder').trigger("destroy");
            jQuery('section.team .slider .sliderholder .member').css({'width':'auto', 'height':'auto'});

            var memberSliderWidth = jQuery('section.team .slider .sliderholder .member').eq(0).width();
            var memberSliderHeight = jQuery('section.team .slider .sliderholder .member').eq(0).height();

            jQuery('section.team .slider .sliderholder .member').css({'width':memberSliderWidth, 'height':memberSliderHeight});

            jQuery('section.team .slider .sliderholder').carouFredSel({

                items  : {
                  visible         : 1,
                  width           : memberSliderWidth,
                  height          : memberSliderHeight
              },

              direction           : "left",

              scroll : {
                  items           : 1,
                  fx              : "crossfade",
                  easing          : "linear",
                  duration        : 800,
                  pauseOnHover    : true
              },
              prev : {
                  button          : 'section.team .slider .bannerNav a.prev'
              },
              next : {
                  button          : 'section.team .slider .bannerNav a.next'
              },
              auto : {
                  play            : false
              },
              responsive          : true
          });

        }
      }

      memberSlider();

      //Page Scroll
      jQuery(".scroll").click(function(event) {

        //prevent the default action for the click event
        event.preventDefault();
        //get the full url - like mysitecom/index.htm#home
        var full_url = this.href;
        //split the url by # and get the anchor target name - home in mysitecom/index.htm#home

        var parts = full_url.split("#");
        var trgt = parts[1];
        //get the top offset of the target anchor

        var target_offset = jQuery("#" + trgt).offset();

        var target_top = target_offset.top - 59;

        //goto that anchor by setting the body scroll top to anchor top
        jQuery('html, body').animate({scrollTop: target_top}, 1000);

       });

        //On Window Resize
        jQuery(window).resize(function(){
            memberSlider();
            banner();
       });
});
