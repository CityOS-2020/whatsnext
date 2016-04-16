(function () {
    'use strict';
    angular.module('whatsNextApp').controller('contentController', contentController);
    contentController.$inject = ['$scope', 'dataService', 'contentService', '$timeout', '$interval', '$uibModal', '$log', 'approachesService', 'sharedService'];
    function contentController($scope, dataService, contentService, $timeout, $interval, $uibModal, $log, approachesService, sharedService) {

        //TODO metodu getPersonalizedContent promijeniti da prima username, ili user id i da stvarno vraca personalized content
        //TODO da bi se to ostvarilo, uvesti kategorije
        //TODO kategorije moraju biti exposed na web api servisu takodjer, da bi ih Abdurrahman mogao gadjati
        $scope.user = contentService.getUser();
        $scope.counter = 0;
        $scope.content = contentService.getGenericContent();
        $scope.currentContent = $scope.content[$scope.counter];
        $scope.counter++;
        $scope.contentLength = $scope.content.length;
        var duration = $scope.currentContent.duration;

        $scope.approachBeingServiced = sharedService.getApproachBeingServiced();

        //vrti sadrzaj
        $interval(function () {
            $scope.currentContent = $scope.content[$scope.counter];

            duration = $scope.currentContent.duration;
            if ($scope.counter >= $scope.contentLength - 1) {
                $scope.counter = 0;
            } else {
                $scope.counter++;
            }
        }, duration);

        //scope.items ce biti proslijedjeno modal controlleru. Ovo ces zamijeniti objektima koje treba prikazivati na modalu
        $scope.items = ['item1', 'item2', 'item3'];

        $scope.animationsEnabled = true;

        $scope.open = function (size) {
            $scope.content = contentService.getPersonalizedContent();

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'scripts/app/views/personalMessageModal.html',
                controller: 'personalMessageModalController',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            //callback koji se okida kad se modal zatvori
            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
                
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };

        //radi poling servisa/baze i gleda ima li NOVE approach notifikacije
        $interval(function () {
            approachesService.getApproaches().then(function (data) {
                //ako ima approach u bazi, ali trenutno opsluzivani nije nasetan, nasetaj taj u bazi da bude trenutno opsluzivani
                if (data.length > 0 && typeof $scope.approachBeingServiced.id == 'undefined') {
                    sharedService.setApproachBeingServiced(data[data.length - 1]);
                    $scope.approachBeingServiced = data[data.length - 1];
                    $scope.open('lg');
                }
                    //ili ako ima, ali to nije trenutno opsluzivani
                    //(trenutni izasao iz range, a novi dosao prije nego se varijabla osvjezila)
                else if (data.length > 0 && $scope.approachBeingServiced.id != sharedService.getApproachBeingServiced().id) {
                    sharedService.setApproachBeingServiced(data[data.length - 1]);
                    $scope.approachBeingServiced = data[data.length - 1];
                }
                    //ako nema nista u bazi
                    //clear trenutno opsluzivane
                else if (data.length == 0) {
                    sharedService.setApproachBeingServiced({});
                    $scope.approachBeingServiced = {};
                    $scope.content = contentService.getGenericContent();
                }
            });
        }, 1000);
    };
}());