var newsFeedModule = angular.module('newsFeed');

newsFeedModule.controller('newsFeedController', function($scope, initDataService) {
    $scope.posterWidth = 100;
    $scope.posterHeight = 60;
    $scope.filterPhrase = '';

    $scope.news = initDataService.initData.values;
});