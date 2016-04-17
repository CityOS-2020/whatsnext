(function () {

    angular.module('whatsNextApp').factory("contentService", contentService);

    contentService.$inject = ['dataService'];

    function contentService(dataService) {
        var entityName = 'content';

        var getUser = function () {
            return dataService.get
            var user = {
                "id": "0",
                "name": "John",
                "imgUrl": "img/abdu.jpg",
                "interestes" : ["tv shows", "food"]
            }
            return user;
        }

        var getGenericContent = function () {
            return dataService.getAll(entityName);
        }


        var getPersonalizedContent = function () {
            return dataService.get(entityName, 1);
        }


        return {
            getGenericContent: getGenericContent,
            getPersonalizedContent: getPersonalizedContent,
            getUser : getUser
        };
    }
}());
