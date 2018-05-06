(function ($) {

  Drupal.behaviors.vw_wx_widget = {
    attach: function (context, settings) {

      function updateWidget(data) {
        var current = data.vw_wx_widget.current,
            forecast = data.vw_wx_widget.forecast,
            snowreport = data.vw_wx_widget.snowreport,
            widget = $('.vw-wx-widgets', context);

        widget.find('.vw-wx-widget-bit').each(function(i) {
          var t = $(this);
          if(t.hasClass('vw-wx-widget-bit-current')) { //current
            t.find("[data-id='temp_c']").html(current.temp_c);
            //t.find("[data-id='temp_f']").html(current.temp_f).css({background: 'purple'});
            t.find("[data-id='temp_f']").html(current.temp_f);
          }
          if(t.hasClass('vw-wx-widget-bit-forecast')) {//forecast
            $('.forecast-items li').each(function(){
              var item = $(this),
                  dex = $(this).index();
                  if (forecast[dex].temp_c) {
                    item.find("[data-id='temp_c']").html(forecast[dex].temp_c);
                  }
                  // if the temperature value doesn't exist then hide the element entirely
                  else {
                    item.find('.wx-meta-temp').hide();
                    return;
                  }
                  item.find("[data-id='temp_f']").html(forecast[dex].temp_f);
                  item.find("[data-id='label']").html(forecast[dex].label);
            });
          }
          //snowreport
          if(t.hasClass('vw-wx-widget-bit-snowreport')
             && snowreport.status > 0) {
            var data_attr = '', hill = '', sr = $('.vw-wx-widget-bit-snowreport');
            for(var i=0;i<snowreport.hills.length;i++) {
              hill = snowreport.hills[i].hill;
              for(var k in snowreport.hills[i]) {
                data_attr = hill+'-'+k;
                var el = sr.find("span[data-id='"+data_attr+"']");
                if(el.length) {
                  el.html((snowreport.hills[i][k] ? snowreport.hills[i][k] : '0')).css({background: 'blue'});
                }
              }
            }
          }

        }).parent().removeClass('loading');
      }

      //load
      $.ajax({
        dataType: "json",
        url: "/json/weather",
        success: updateWidget,
      });
    }
  };

})(jQuery);
;
