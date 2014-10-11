<?php

class PJSiteConfig extends DataExtension
{
  private static $db = array(
    'GoogleAnalyticsID' => 'Varchar(10)'
  );

  private static $has_one = array(
  );

  private static $has_many = array(
  );

  public function updateCMSFields(FieldList $fields)
  {
    $f = TextField::create('GoogleAnalyticsID', 'Google Analytics site ID');
    $fields->addFieldToTab("Root.Extras", $f);
  }
}