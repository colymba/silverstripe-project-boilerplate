<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <% base_tag %>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>$Title : $SiteConfig.Title : $SiteConfig.Tagline</title>
        <meta name="description" content="$MetaDescription">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        $ExtraMeta

        <!-- build:css(.) code/views/css/main.css -->
        <!-- bower:css -->
        <!-- endbower -->
        <link rel="stylesheet" href="$PJ/code/views/css/main.css">
        <!-- endbuild -->

        <script src="$PJ/code/views/js/vendor/modernizr.js"></script>
    </head>
    <body>

        $Layout

        <% include js %>  

    </body>
</html>