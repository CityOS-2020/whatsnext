(function () {
    'use strict';
    angular.module('whatsNextApp').controller('contentController', contentController);
    contentController.$inject = ['$scope', 'dataService', 'contentService', '$timeout', '$interval']
    function contentController($scope, dataService, contentService, $timeout, $interval) {

        //dataService.getAll('content').then(function (data) {
        //    $scope.content = data;
        //});

        //contentService.getGenericContent().then(function(data) {
        //    scope.genericContent = data;
        //});
        $scope.counter = 0;
        $scope.genericContent = contentService.getGenericContent();
        $scope.currentContent = $scope.genericContent[$scope.counter];
        $scope.counter++;
        $scope.firstRun = true;
        $scope.contentLength = $scope.genericContent.length;
        var duration = $scope.currentContent.duration;
        

        $interval(function () {
            $scope.currentContent = $scope.genericContent[$scope.counter];
            duration = $scope.currentContent.duration;
            console.log(duration);
            if ($scope.counter >= $scope.contentLength - 1) {
                $scope.counter = 0;
            } else {
                console.log("reset counter");
                $scope.counter++;
            }
        }, duration);
    };
}());