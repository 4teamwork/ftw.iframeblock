(function (factory) {
  if (typeof define === 'function' && define.amd) {
    require(['jquery', 'iframeResizer'], factory);
  } else {
    factory(window.jQuery, window.iFrameResize);
  }
}(function ($, iFrameResize) {
  "use strict";

  // We have to wait for the ready and then add the onload event listener directly on the
  // iframe because the iframe does not propagate the onload back to document.
  $(document).ready(() => {
    $('iframe').on('load', function () {
      var iframe = $(this);

      if (iframe.data('autoSize') === 'True') {
        iFrameResize({
          inPageLinks: true,
          heightCalculationMethod: iframe.data('heightCalculationMethod'),
          onResized: function () {scroll(0, 0);},
        }, this);
      }

      iframe.prev().removeClass('loading');
    });
  });
}));
