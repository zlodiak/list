var newsFeed = angular.module('newsFeed', []);;
newsFeed.controller('modalController', ['$scope', function($scope) {
  $scope.modalShown = false;

  $scope.toggleModal = function() { 
    $scope.modalShown = !$scope.modalShown;    
  };
}]);
var newsFeedModule = angular.module('newsFeed');

newsFeedModule.controller('newsFeedController', function($scope, initDataService) {
    $scope.posterWidth = 100;
    $scope.posterHeight = 60;
    $scope.filterPhrase = '';

    $scope.news = initDataService.initData.values;
});
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
newsFeed.filter('objectProplimitTo', function() {
  return function(obj, count) {
    var res = [];

    for (var p in obj) {
      if (res.length == count) return res;
      res.push(obj[p]);
    }
  }

  return res;
})



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