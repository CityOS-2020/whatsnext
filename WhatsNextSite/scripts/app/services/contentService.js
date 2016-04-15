(function () {

    angular.module('whatsNextApp').factory("contentService", contentService)

    contentService.$inject = ['dataService'];

    function contentService(dataService) {
        var entityName = 'content';


        var getAverages = function () {
            return dataService.getAll(entityName);
        }

        var updateAverages = function (id, entity) {
            return dataService.updateEntity(entityName, id, entity);
        }

        return {
            getAverages: getAverages,
            updateAverages: updateAverages
        };
    }
}());
