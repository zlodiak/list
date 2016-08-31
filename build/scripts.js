(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var newsFeed = angular.module('newsFeed', []);;
},{}]},{},[1])
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
newsFeed.factory('initDataService', function(){
    return{
        initData:{
            "values":[
                {"title":"Lo23reddm ips sit.", "poster": "1.jpg", "description": "Lorem 45 ipsum dolor sit amet, consectetur a!"},
                {"title":"Lorem ipsum dolor sit.", "poster": "2.jpg", "description": "Lorem ipsum dolor sit amet, consectetur a!"},
                {"title":"Lo ipsum dolor sit.", "poster": "3.jpg", "description": "Lorem ipsum dolor sit amet, consectetur a!"},
                {"title":"Lorem  dolor sit.", "poster": "4.jpg", "description": "Lorem ipsum dolor sit amet, consectetur a!"},
                {"title":"Lorem ipsuor sit.", "poster": "5.jpg", "description": "Lorem ipsum dolor sit amet, consectetur a!"},
                {"title":"Loreum dolor sit.", "poster": "6.jpg", "description": "Lorem ipsum dolor sit amet, consectetur a!"},
                {"title":"Lorem i dolor sit.", "poster": "7.jpg", "description": "Lorem ipsum dolor sit amet, consectetur a!"},
                {"title":"L ipsum dolor sit.", "poster": "8.jpg", "description": "Lorem ipsum dolor sit amet, consectetur a!"}
            ]
        }
    };
})
},{}]},{},[1])
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var newsFeedModule = angular.module('newsFeed');

newsFeedModule.controller('newsFeedController', function($scope, initDataService) {
    $scope.posterWidth = 100;
    $scope.posterHeight = 60;
    $scope.filterPhrase = '';

    $scope.news = initDataService.initData.values;
});
},{}]},{},[1])
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
newsFeed.controller('modalController', ['$scope', function($scope) {
  $scope.modalShown = false;

  $scope.toggleModal = function() { 
    $scope.modalShown = !$scope.modalShown;    
  };
}]);
},{}]},{},[1])
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
newsFeedModule.directive('modalDialog', function() {
  return {
    restrict: 'E',

    scope: {
      show: '='
    },

    replace: true, // Replace with the template below

    transclude: true, // we want to insert custom content inside the directive

    link: function(scope, element, attrs) {
      scope.dialogStyle = {};

      if (attrs.width)
        scope.dialogStyle.width = attrs.width;

      if (attrs.height)
        scope.dialogStyle.height = attrs.height;

      scope.hideModal = function() {
        scope.show = false;
      };
    },

    templateUrl: "js/project/tpls/modalTpl.html"
  };
});
},{}]},{},[1])