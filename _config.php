<?php
/**
 * SilverStripe project configuration
 * Some practical and opinionated defaults
 */

/**
 * Global $project definition
 * Rename at will
 */
global $project;
$project = 'ss-project-boilerblate';


/**
 * Database definition
 * Update with you DB config if not using environment
 */
/*::config:dev*/
global $database;
$database = 'ss-project-boilerblate';
/*::config*/

/*::config:live
global $databaseConfig;
$databaseConfig = array(
  'type'     => 'MySQLDatabase',
  'server'   => 'localhost',
  'username' => '',
  'password' => '',
  'database' => '',
  'path'     => ''
);
::config*/

/**
 * Environment management
 */
require_once('conf/ConfigureFromEnv.php');


/**
 * Define global for this project root folder.
 * Rename at will but remmeber to update _config/HtmlEditorConfig.php too.
 *
 * This is mainly used with the {@link TemplateGlobalProvider}
 * to define tempalte vairable {@see Page_Controller}.
 */
if(!defined('SS_PROJECT_BOILERPLATE_ROOT')) {
  define('SS_PROJECT_BOILERPLATE_ROOT', rtrim(basename(dirname(__FILE__))));
}


/**
 * Setting up the locale
 */
i18n::set_locale('en_US');


/**
 * Load custom HTMLEditorConfig
 * Put in a separate file to keep things tidy
 */
require_once('_config/HtmlEditorConfig.php');


/**
 * Error logging
 */
SS_Log::add_writer(new SS_LogFileWriter(__DIR__ . '/_logs/ss.txt'), SS_Log::DEBUG, '<=');
ini_set('log_errors', 'On');
ini_set('error_log', __DIR__ . '/_logs/php.txt');