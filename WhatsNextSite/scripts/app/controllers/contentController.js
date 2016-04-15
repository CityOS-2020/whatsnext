(function () {
    'use strict';
    angular.module('whatsNextApp').controller('contentController', contentController);
    contentController.$inject = ['$scope', 'dataService']
    function contentController($scope, dataService) {

        dataService.getAll('content').then(function (data) {
            $scope.content = data;
        });
    };
}());