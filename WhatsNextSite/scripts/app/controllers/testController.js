(function () {
    'use strict';
    angular.module('whatsNextApp').controller('testController', contentController);
    contentController.$inject = ['$scope', 'dataService', 'approachesService']
    function contentController($scope, dataService, approachesService) {

        dataService.getAll('approach').then(function (data) {
            $scope.content = data;
        });

        $scope.sendApproachNotification = function() {
            var approach = {
                FKUser: 1
            };

            dataService.saveEntity('Approach', approach).then(function (data) {
                var savedApproach = data;
            });
        }

        //contentService.getGenericContent().then(function(data) {
        //    scope.genericContent = data;
        //});
    };
}());