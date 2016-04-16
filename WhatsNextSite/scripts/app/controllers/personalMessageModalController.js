(function () {
    'use strict';
    angular.module('whatsNextApp').controller('personalMessageModalController', personalMessageModalController);
    personalMessageModalController.$inject = ['$scope', '$uibModalInstance', 'items', 'approachesService', '$interval']
    function personalMessageModalController($scope, $uibModalInstance, items, approachesService, $interval) {
        $scope.items = items;
        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function () {
            $uibModalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
        angular.element(document.getElementById('message')).addClass("messageHeight");

        //Zatvara modal automatski nakon 10 sekundi, kad se modal zatvori, treba u parent kontroleru zamijeniti content
        //i drzati ga zamijenjenog dok approach notifikacija ne bude obrisana. Kad bude obrisana, treba vratiti regularni content.
        $interval(function () {
            $scope.ok();
            angular.element(document.getElementById('message')).removeClass("messageHeight");
        }, 10000);
    };
}());