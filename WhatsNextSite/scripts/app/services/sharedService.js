(function () {

    angular.module('whatsNextApp').factory("sharedService", sharedService);

    sharedService.$inject = ['dataService'];

    function sharedService(dataService) {
        var entityName = 'shared';
        var approachBeingServiced = {};

        var getApproachBeingServiced = function () {
            return approachBeingServiced;
        };

        var setApproachBeingServiced = function (value) {
            approachBeingServiced = value;
            return approachBeingServiced;
        };

        return {
            getApproachBeingServiced: getApproachBeingServiced,
            setApproachBeingServiced: setApproachBeingServiced
        };
    }
}());