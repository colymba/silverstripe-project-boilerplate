Silverstripe Project Boilerplate
================================

[![Latest Stable Version](https://poser.pugx.org/colymba/silverstripe-project-boilerplate/v/stable.svg)](https://github.com/colymba/silverstripe-project-boilerplate/releases)
[![Latest Unstable Version](https://poser.pugx.org/colymba/silverstripe-project-boilerplate/v/unstable.svg)](https://github.com/colymba/silverstripe-project-boilerplate/tree/master)
[![License](https://poser.pugx.org/colymba/silverstripe-project-boilerplate/license.svg)](#license-bsd-simplified)

A very much opinionated SilverStripe project boilerplate/skeleton with nifty tools, tips and tricks.


## Requirements
* SilverStripe 3
* NodeJS
* GruntJS
* Bower


## TL;DR

This project replaces the default `mysite` and `themes` folders that comes with any SilverStipe install. And replaces those with a tightly packed project directory easy to manage and ship.

| Action                | Terminal        |
| :-------------------- | :-------------- |
| Init dependencies     | `npm update`    |
| -                     | `bower update`  |
| Start coding          | `grunt dev`     |
| Ready to ship         | `grunt dist`    |


### In details

Once you have SilverStripe up and running, save your important `_config.php` settings and get rid of the `mysite` folder. Rename the `ss-project-boilerplate` folder to something that makes sense for you and update the `_config.php`.

There are comments in most of the files included, so read on to learn more about each specific lines. This module will *impose* the following project structure:

| Folder/File                  | Content                                                   |
| :--------------------------- | :-------------------------------------------------------- |
| `_config`                    | YAML config + includes for `_config.php`                  |
| `_config.php`                | Base config + include additional ones                     |
| ---------------------------- | --------------------------------------------------------- |
| `_dist`                      | Ready to ship optimized project will be generated here    |
| ---------------------------- | --------------------------------------------------------- |
| `code`                       | All your code                                             |
| `code/controllers`           | `Controllers`                                             |
| `code/models`                | Everything `DataObjects`                                  |
| `code/models/admins`         | `ModelAdmins`                                             |
| `code/models/dataObjects`    | `DataObjects`                                             |
| `code/models/extensions`     | `DataExtensions`                                          |
| `code/models/pages`          | `SiteTree` descendants                                    |
| ---------------------------- | --------------------------------------------------------- |
| `code/views`                 | Everything front-end                                      |
| `code/views/css`             | SCSS                                                      |
| `code/views/fonts`           | Fonts                                                     |
| `code/views/img`             | Images                                                    |
| `code/views/js`              | JS                                                        |
| `code/views/js/vendor`       | Non Bower JS libraries                                    |
| `code/views/templates`       | SS templates                                              |

#### Front-end dependencies

All front-end dependencies (CSS + JS) are managed via Bower, edit the `bower.json` to suite your needs then run `bower update`. These will automatically be injected later on in the SileverStripe templates (`Page.ss` + `js.ss`).

#### Developing and publishing your project

We'll be using GruntJS to automate the development and publishing process, so make sure to first have the NodeJS packages dependencies installed by runnning `npm update`.

Once that's done, run `grunt dev` and start coding. This will inject Bower JS/CSS/SCSS dependencies for you, create a customized Modernizr and watch and compile your SASS for you.

Once you are done and ready to publish your project, run `grunt dist` and an optimized copy of all your project files will be in the `_dist` directory ready to upload. Config will be updated to live, CSS/JS concatenated and minified, and all you templates minified too.

#### Dev/Live configurations

The `grunt dist` task will autiomatically replace references of `environment_type: 'dev'` to `live` in your `config.yml`.

For PHP files (this applies to **all** PHP files in your project directory), you can use fenced code blocks to specify code that is to be removed or enabled in the distribution version (see `_config.php` for an example):
- use `/*::config:dev*/` ... `/*::config*/` to mark blocks of codes to be removed
- use `/*::config:live` ... `::config*/` to mark blocks of codes to be enabled


## License (BSD Simplified)

Copyright (c) 2013, Thierry Francois (colymba)

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 * Neither the name of Thierry Francois, colymba nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
 
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
