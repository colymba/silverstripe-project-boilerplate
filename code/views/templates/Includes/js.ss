<!-- build:js(.) code/views/js/main.js -->
<!-- bower:js -->
<!-- endbower -->

<script src="$PJ/code/views/js/main.js"></script>
<!-- endbuild -->


<% if $SiteConfig.GoogleAnalyticsID %>
  <script>
    (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
    e=o.createElement(i);r=o.getElementsByTagName(i)[0];
    e.src='//www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
    ga('create','UA-XXXXX-X');ga('send','pageview');
  </script>
<% end_if %>