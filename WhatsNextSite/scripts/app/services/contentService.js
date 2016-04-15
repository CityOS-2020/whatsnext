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
                    "imgUrl": "img/unsplash1.jpg",
                    "title": {
                        "left": "what's",
                        "right": "next"
                    },
                    "message1" : {
                        "left": "Welcome to the next generation of",
                        "right": "smart content serving"
                    },
                    "message2": {
                        "left": "Something",
                        "right": "cool"
                    },
                    "message3": {
                        "left": "Something",
                        "right": "cool"
                    },
                    "message4": {
                        "left": "Welcome to the next generation of",
                        "right": "smart content serving"
                    },
                    "duration": 7000
                },
                {
                    "id": 1,
                    "imgUrl": "img/unsplash2.jpg",
                    "message1": {
                        "left": "Welcome to the next generation of",
                        "right": "smart content serving"
                    },
                    "message2": {
                        "left": "Something",
                        "right": "cool"
                    },
                    "message3": {
                        "left": "Something",
                        "right": "cool"
                    },
                    "message4": {
                        "left": "Welcome to the next generation of",
                        "right": "smart content serving"
                    },
                    "duration": 7000
                },
                {
                    "id": 2,
                    "imgUrl": "img/unsplash3.jpg",
                    "message1": {
                        "left": "Welcome to the next generation of",
                        "right": "smart content serving"
                    },
                    "message2": {
                        "left": "Something",
                        "right": "cool"
                    },
                    "message3": {
                        "left": "Something",
                        "right": "cool"
                    },
                    "message4": {
                        "left": "Welcome to the next generation of",
                        "right": "smart content serving"
                    },
                    "duration": 7000
                }
            ];
            return genericContent;
        }

        return {
            getGenericContent: getGenericContent
        };
    }
}());
