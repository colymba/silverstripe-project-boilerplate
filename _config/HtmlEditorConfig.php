<?php
/**
 * HTML Editor base configuration
 * This is a very opinionated default, feel free to update it * 
 */
HtmlEditorConfig::get('cms')
  ->setOption('theme_advanced_blockformats', 'p,h2,h3,h4,h5,h6')
  ->setButtonsForLine(1, array('bold','italic','underline','strikethrough','separator','sslink', 'unlink','separator','justifyleft','justifycenter','justifyright','justifyfull','formatselect','separator','bullist','numlist','charmap'))
  ->setButtonsForLine(2, array('undo','redo','separator','cut','copy','pastetext','spellchecker','separator','advcode','search','replace','selectall','visualaid','separator','code'))
  ->setButtonsForLine(3, array());

HtmlEditorConfig::get('cms')->insertButtonsBefore('formatselect', 'styleselect');
//HtmlEditorConfig::get('cms')->addButtonsToLine(3, 'tablecontrols');

HtmlEditorConfig::get('cms')
  ->setOptions(array(
    'valid_elements' => "@[id|class|style|title],a[id|rel|rev|dir|tabindex|accesskey|type|name|href|target|title"
      . "|class],-strong/-b[class],-em/-i[class],-strike[class],-u[class],#p[id|dir|class|align|style],-ol[class],"
      . "-ul[class],-li[class],br,img[id|dir|longdesc|usemap|class|src|border|alt=|title|width|height|align|data*],"
      . "-sub[class],-sup[class],-blockquote[dir|class],"
      . "-table[border=0|cellspacing|cellpadding|width|height|class|align|summary|dir|id|style],"
      . "-tr[id|dir|class|rowspan|width|height|align|valign|bgcolor|background|bordercolor|style],"
      . "tbody[id|class|style],thead[id|class|style],tfoot[id|class|style],"
      . "#td[id|dir|class|colspan|rowspan|width|height|align|valign|scope|style],"
      . "-th[id|dir|class|colspan|rowspan|width|height|align|valign|scope|style],caption[id|dir|class],"
      . "-span[class|align|style],-pre[class|align],address[class|align],"
      . "-h1[id|dir|class|align|style],-h2[id|dir|class|align|style],-h3[id|dir|class|align|style],"
      . "-h4[id|dir|class|align|style],-h5[id|dir|class|align|style],-h6[id|dir|class|align|style],hr[class],"
      . "dd[id|class|title|dir],dl[id|class|title|dir],dt[id|class|title|dir],@[id,style,class]"
  ));

HtmlEditorConfig::get('cms')->setOption('content_css', implode(',', array(
  FRAMEWORK_ADMIN_DIR . '/css/editor.css',
  SS_PROJECT_BOILERPLATE_ROOT . '/code/views/css/editor.css?cache='.time()
)));