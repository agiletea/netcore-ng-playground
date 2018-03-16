# netcore-ng-playground
Test Playground for using Angualr 5 within an asp.net core 2.0 MVC host

This is simply a sample VS2017 solution that incorporates an asp.net core mvc solution with an Angular core app.

Genreated from the vanilla asp.net core web application + Angular template, the following changes were made before initial commit:

1. Upgraded Angualr to v5, including the replacement of HttpModule with HttpClientModule
2. Included Angular Material as the standard component library
3. Add Gulp file with some minificaiton and uglification routines for use with css
4. Added CSS folder under wwwroot for dev style sources to add in the Material Theme and any custom css (used by the gulp routines as the source for the *.min.css)
5. Added a new component (mydata) to demo the creation of a component using an intermediary injectable service, an mvc controller (as an api) and some of the material components

## Requirements
1. VS 2017 (not yet testedt on VS2015)
2. Check you have node (min version 8) and npm (min version 5) installed and up-to-date (https://www.npmjs.com/get-npm)

## Get Started

After you have cloned the initial repository you will need to intall the node modules:

1. VS 2017 may well try to initiate this. If this is taking to long then close the solution, open a cmd promt from the same directory of your repo source, and type:
```
npm install
```
