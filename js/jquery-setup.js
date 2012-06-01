/*global define*/

require.config({
  shim : {
    'vendor/bootstrap/bootstrap-modal' : ['jquery']
  }
})

define([
  'jquery',
  'vendor/bootstrap/bootstrap-modal'
  ],
  function ($) {
    "use strict";

    return $;
  }
);
