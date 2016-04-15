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
        

        $interval(function() {
            if ($scope.counter < $scope.genericContent.length) {
                console.log($scope.counter);
                $scope.currentContent = $scope.genericContent[$scope.counter];
                $scope.counter++;
            } else {
                console.log("reset counter");
                $scope.counter = 0;
            }
        }, $scope.currentContent.duration);

        $("body").vegas({
            delay: 7000,
            slides: [
                { src: "../img/unsplash1.jpg" },
                { src: "../img/unsplash2.jpg" },
                { src: "../img/unsplash3.jpg" },
                { src: "../img/unsplash4.jpg" }
            ]
        });

    };
}());