(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/*
The Step Definition can be a regular expression or a Cucumber expression. 
 https://docs.cucumber.io/cucumber/step-definitions/
*/

/*
https://github.com/TheBrainFamily/cypress-cucumber-preprocessor

WebStorm Support
If you want WebStorm to resolve your steps, use the capitalized Given/When/Then function names (instead of the initial given/when/then). Unfortunately, at this point WebStorm only understands regexp syntax:

Given(/^user navigated to the Start page?/, () => { });
Or a backtick syntax but without Cucumber Expressions :-(. In other words, this works:

Given(`user navigated to the start page`, () => { });
Then(/(.*?) is chosen/, choice => {})
But this doesn't:

Then(`{word} is chosen`, choice => {})
(See #56)
*/
// Example with cucumber expression.
Given(/^I go to the website (.*)$/, function (url) {
  cy.visit(url);
}); // Example with regulair expression.  

Then(/^I see (.*) in the title$/, function (title) {
  cy.title().should('include', title);
});

},{}]},{},[1]);
