(function () {

    angular.module('whatsNextApp').factory("approachesService", approachesService)

    approachesService.$inject = ['dataService'];

    function approachesService(dataService) {
        var entityName = 'approach';


        var getApproaches = function () {
            return dataService.getAll(entityName);
        }

        var updateApproaches = function (id, entity) {
            return dataService.updateEntity(entityName, id, entity);
        }

        var postApproaches = function (entity) {
            return dataService.updateEntity(entityName, entity);
        }

        return {
            getApproaches: getApproaches,
            updateApproaches: updateApproaches,
            postApproaches: postApproaches
        };
    }
}());