(function () {
    'use strict';
    angular.module('whatsNextApp').controller('contentController', contentController);
    contentController.$inject = ['$scope', 'dataService', 'contentService']
    function contentController($scope, dataService, contentService) {

        //dataService.getAll('content').then(function (data) {
        //    $scope.content = data;
        //});

        //contentService.getGenericContent().then(function(data) {
        //    scope.genericContent = data;
        //});

        $scope.genericContent = contentService.getGenericContent();
    };
}());