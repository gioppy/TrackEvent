/*
 * TrackEvent v0.0.1 - jQuery plugin for trackign Google Analitycs events
 *
 * Copyright (c) 2012 Giovanni Buffa
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 */

(function($){
  $.trackEvent = function(element, options){
    var settings, action, category, label;

    settings = $.extend(true, {}, $.trackEvent.defaults);
    $.extend(true, settings, options);

    var init = function(){
      var track = getTrack();
      _gaq.push(['_trackEvent', track.action, track.category, track.label]);
    }

    var getTrack = function(){
      var $this, track;
      $this = $(element);
      track = $this.data('track');

      return track || settings.track;
    }

    if($(document).trigger('track.trackEvent', [settings]) != false){
      init();
    }
  }

  $.extend($.trackEvent, {
    defaults:{
      track:''
    }
  });

  $.fn.trackEvent = function(options){
    $(this).click(function(e){
      $(this).data('trackEvent', $.trackEvent(this, options));
    })

    return this;
  }
})(jQuery);