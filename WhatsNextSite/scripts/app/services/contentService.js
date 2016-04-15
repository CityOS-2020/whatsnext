(function () {

    angular.module('whatsNextApp').factory("contentService", contentService)

    contentService.$inject = ['dataService'];

    function contentService(dataService) {
        var entityName = 'content';


        var getGenericContent = function () {
            //return dataService.getAll(entityName);
            var genericContent = [
                {
                    "id": 0,
                    "imgUrl": "url1"
                },
                {
                    "id": 2,
                    "imgUrl": "url2"
                }
            ];
            return genericContent;
        }

        return {
            getGenericContent: getGenericContent
        };
    }
}());
