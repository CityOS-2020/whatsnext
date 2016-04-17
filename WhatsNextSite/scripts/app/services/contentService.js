(function () {

    angular.module('whatsNextApp').factory("contentService", contentService);

    contentService.$inject = ['dataService'];

    function contentService(dataService) {
        var entityName = 'content';

        var getUser = function () {
            
            var user = {
                "id": "0",
                "firstName": "test",
                "imgUrl": "img/abdu.jpg",
                "interestes": ["tv shows", "food"]
            };
           
            return user;
        }

        var getApproaches = function () {
            return dataService.getAll(entityName);
        }

        var getGenericContent = function () {
            return dataService.getAll(entityName);
        }


        var getPersonalizedContent = function (userId) {
            var userName = getUser().name;
            return dataService.getEntity(entityName, userId);
        }


        return {
            getGenericContent: getGenericContent,
            getPersonalizedContent: getPersonalizedContent,
            getUser : getUser
        };
    }
}());
