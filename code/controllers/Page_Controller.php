<?php
/**
 * A pretty much empty Page Controller
 * but with a couple cool things.
 *
 * Note: Doesn't have to be Page_Controller!
 */
class Page_Controller extends ContentController implements TemplateGlobalProvider
{

    private static $allowed_actions = array(
  );

    public function init()
    {
        parent::init();
    }

  /** ***************************************************************************
   * Temlplate variables/functions
   */

  public static function get_template_global_variables()
  {
      return array(
      'PJ' => 'pj_root',
      'YEAR' => 'current_year'
    );
  }

  /**
   * You can (should!) use $PJ in your template when linking to css or js files.
   * 
   * If you choose to use something else than $PJ as a global template variable
   * please update {@link Grunfile.js} config.templatePathPrefix
   * 
   * @return string This project's root directory
   */
  public static function pj_root()
  {
      return SS_PROJECT_BOILERPLATE_ROOT;
  }

  /**
   * Return the current year.
   * Usefull for copyright notice (e.g. copyright 2014)
   * 
   * @return string Current 4 digit year
   */
  public static function current_year()
  {
      return date('Y');
  }
}
