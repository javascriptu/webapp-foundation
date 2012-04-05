/*global require*/

require.config({
  paths : {
    jquery : 'vendor/jquery-1.7.1.min'
  }
});

require(['jquery'], function($){
  "use strict";

  $('#main h2').fadeIn();

});
