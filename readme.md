# RPG Project

#### By **Travis Toal** and **Randee Layosa**

### Description

### Target Users

### User Personas / Stories

## Planning

1. Configuration/dependencies
  * babel-core, loader, and preset-es2015: compiles JS for different browsers
  * clean-webpack-plugin: clears dist folder
  * css-loader, style-loader, sass-loader, node-sass: dependencies for styles
  * eslint, eslint-loader: linter for JS
  * file-loader: loads images
  * html-webpack-plugin: dependency for loading html file
  * jasmine, jasmine-core, karma, karma-chrome-launcher, karma-cli, karma-jasmine, karma-jasmine-html-reporter, karma-jquery, karma-sourcemap-loader, karma-webpack: testing dependencies
  * uglifyjs-webpack-plugin: minifying dependency
  * webpack, webpack-cli, webpack-dev-server: bundling dependencies

2. Specs

  | Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Program moves the player's sprite on a key press** | WASD | moves up, left, down, right |
| **Program has a calendar that moves forward one day every 10 seconds** | Program start: 10/1/2035 | Ten seconds after program start: 10/2/2035 |
| **Program ends the game after 30 days (five minutes)** | Calendar: 10/31/2035 | GAME OVER |
| **Player contains an Inventory object** | Program start | Player {Knowledge: 10 pts., Strength: 0; Money: 0;} |
| **Inventory can be toggled by clicking on a button** | Click on 'view inventory' | Inventory div show/hide |
| **Program has a cursor grab function that allows for a supply (inventory) count** | clicks on book icon | Knowledge: 10 pts. |
| **Program increases health score when points are added to the inventory** | click on dumbbell icon | Health: 10 pts. |
| **Program has a laser count that depicts the building status of the laser gun**| Metal: 20 pts, Strength: 35 pts. | Laser: 40% |
| **Program adds points to laser count by unloading inventory when user clicks on laser icon**| Metal: 20 pts, Strength: 35 pts. | Laser: 40% |
| **Program replaces any instance of the number two** | "2" | "Boop!" |
| **Program replaces any instance of the number three**| "3" | "I'm sorry, Dave. I'm afraid I can't do that." |


3. Integration
* Initial routes or index pages with all dependencies in Controller/index.html head
* Template/html page for ...
* Template/html page for ...
* Template/html page for ... (one for each route/integrated user story)
* Display...
* Integrate feature that...

4. UX/UI
* Include and modify bootstrap/materialize/Sass etc.
* Develop custom style

5. Polish
* Refactor minor portion of...
* Delete unused...
* Make README awesome

## Result

## Technologies Used

* _Node Package Manager_

* _Sass_

* _jQuery_

* _And the following dependencies:_

### Setup / Installation Requirements

* _Clone this directory to your machine's desktop_

* _In your terminal, at the project's top level, run the command:_

  _npm install_

* _If no errors occur and you want to open a local server, run the command:_

  _npm run start_

* _If you want to run tests, run the command:_

  _npm test_

### Known Bugs


#### General Issues


### Support and Contact Details


#### License
* _This software is licensed under the MIT license_

Copyright (c) 2019 **Travis Toal, Randee Layosa**
