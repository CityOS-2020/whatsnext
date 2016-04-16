(function () {
    'use strict';
    angular.module('whatsNextApp').controller('testController', contentController);
    contentController.$inject = ['$scope', 'dataService', 'approachesService']
    function contentController($scope, dataService, approachesService) {

        dataService.getAll('approach').then(function (data) {
            $scope.content = data;
        });

        $scope.sendApproachNotification = function () {
            var approach = {
                FKUser: 1
            };

            var approachBeingServiced = false;

            approachesService.getApproaches().then(function (data) {
                approachBeingServiced = data.length > 0;

                if (!approachBeingServiced) {
                    dataService.saveEntity('Approach', approach).then(function (data) {
                        var savedApproach = data;
                    });
                }
            });
        }

        $scope.removeApproachNotification = function () {
            var approachBeingServiced;
            approachesService.getApproaches().then(function (data) {
                if (data.length > 0) {
                    approachBeingServiced = data[data.length - 1];
                    dataService.deleteEntity('Approach', approachBeingServiced.id).then(function (data) {
                        var deletedApproach = data;
                    });
                }
            });
        }

        $scope.updateUserInterests = function() {
            var theUser = {
                "Id": 1,
                "UserName": "g",
                "FirstName": "g",
                "LastName": "g",
                "MiddleName": "g",
                "HomeTown": "g",
                "Interests": [
                    {
                        "FKUser": 1,
                        "Name": "rr"
                    },
                    {
                        "FKUser": 1,
                        "Name": "tt"
                    },
                    {
                        "FKUser": 1,
                        "Name": "yy"
                    }
                ]
            }

            dataService.updateEntity("users", 0, theUser).then(function (data) {
                alert(data);
            });
        }

        //contentService.getGenericContent().then(function(data) {
        //    scope.genericContent = data;
        //});
    };
}());