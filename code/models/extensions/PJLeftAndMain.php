<?php
/**
 * A basic {@link LeftAndMainExtension} to get things started
 * This one is usually mainly used to customised the CMS main menu
 * (e.g. remove links, or reorganised buttons)
 */
class PJLeftAndMain extends LeftAndMainExtension
{
    public function init()
    {
        //CMSMenu::remove_menu_item('Help'); //Note: this can't be in _config.php!

    /**
     * Basic exmplate for reorganising a menu
     *//*
    $menu = CMSMenu::get_menu_item('CMSSettingsController');
    CMSMenu::replace_menu_item(
      'CMSSettingsController',
      $menu->title,
      $menu->url,
      $menu->controller,
      0 //actual sort order to change
    );
    */
   
    /**
     * Stylesheet with basic overrides
     */
    Requirements::css(SS_PROJECT_BOILERPLATE_ROOT . '/code/views/css/LeftAndMain.css');
    }
}
