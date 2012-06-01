/*global require*/

require.config({
  paths : {
    jquery : 'vendor/jquery-1.7.2.min'
  }
});

require(['jquery-setup'], function($){
  "use strict";

  // http://api.jquery.com/jQuery/#jQuery3
  $(onLoad);

  function onLoad() {
    $('#welcomeModal').modal();
  }

});
