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
                    "duration": 8000,
                    "animation": 0
                },
                {
                    "id": 1,
                    "imgUrl": "img/unsplash2.jpg",
                    "title": {
                        "left": "Second",
                        "right": "slide"
                    },
                    "message1": {
                        "left": "This is second image",
                        "right": "that comes after the first"
                    },
                    "message2": {
                        "left": "This is",
                        "right": "Sparta"
                    },
                    "message3": {
                        "left": "Said",
                        "right": "someone important"
                    },
                    "message4": {
                        "left": "It is too late for",
                        "right": "writing something smart"
                    },
                    "duration": 8000,
                    "animation": 0
                },
                {
                    "id": 2,
                    "imgUrl": "img/unsplash3.jpg",
                    "title": {
                        "left": "No",
                        "right": "Idea"
                    },
                    "message1": {
                        "left": "This is what's",
                        "right": "next ext xt t"
                    },
                    "message2": {
                        "left": "Welcome",
                        "right": "master"
                    },
                    "message3": {
                        "left": "I ahve",
                        "right": "missed you"
                    },
                    "message4": {
                        "left": "Don't worry. Next time",
                        "right": "I will have more precise gun"
                    },
                    "duration": 8000,
                    "animation": 0
                }
            ];
            return genericContent;
        }

        return {
            getGenericContent: getGenericContent
        };
    }
}());
