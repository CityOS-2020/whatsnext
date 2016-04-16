(function () {

    angular.module('whatsNextApp').factory("contentService", contentService);

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
                        "left": "mamma mia",
                        "right": "pizza"
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

                    "duration": 5000,
                    "animation": 0,
                    "slide": "slideInLeft",
                    "mediaType": "img"
                },
                {
                    "id": 1,
                    "imgUrl": "img/video.mp4",
                    "title": {
                        "left": "welcome to",
                        "right": "dubrovnik"
                    },
                    "message1": {
                        "left": "We wish you a pleasant and comfortable stay in Dubrovnik and hope your visit will be one of many",
                        "right": "memorable experiences"
                    },
                    "message2": {
                        "left": "Try",
                        "right": "what's next"
                    },
                    "message3": {
                        "left": "Our app is completely",
                        "right": "free"
                    },
                    "message4": {
                        "left": "To download the app, just scan the provided",
                        "right": "qr code"
                    },
                    "duration": 5000,
                    "animation": 5,
                    "slide": "slideInLeft",
                    "mediaType": "video"
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
                    "duration": 5000,
                    "animation": 10,
                    "slide": "slideInLeft",
                    "mediaType": "img"
                }
            ];
            return genericContent;
        }


        var getPersonalizedContent = function () {
            //return dataService.getAll(entityName);
            var personalizedContent = [
                {
                    "id": 3,
                    "imgUrl": "img/pizza2.jpg",
                    "mainText" : {
                        "left": "Since you like pizza, you should try Mamma Mia's",
                        "right": "Double Cheese Pizza"
                    },
                    "title": {
                        "left": "mamma mia",
                        "right": "pizza"
                    },
                    "message1": {
                        "left": "Our friends at Mamma Mia Pizzeria have their",
                        "right": "winter sale on"
                    },
                    "message2": {
                        "left": "Up to",
                        "right": "50% off"
                    },
                    "message3": {
                        "left": "Special offer",
                        "right": "today"
                    },
                    "message4": {
                        "left": "This offer is valid in all our pizzerias",
                        "right": "in Dubrovnik"
                    },

                    "duration": 5000,
                    "animation": 0,
                    "slide": "slideInLeft",
                    "display": "display",
                    "mediaType": "img"
                },
                {
                    "id": 4,
                    "imgUrl": "img/lokrum.jpg",
                    "mainText": {
                        "left": "Since you like nice boat trips, check out the",
                        "right": "Lokrum Boat Trip"
                    },
                    "title": {
                        "left": "boat trip",
                        "right": "lokrum"
                    },
                    "message1": {
                        "left": "Benjamin, you should hurry up, there are only",
                        "right": "25 places left"
                    },
                    "message2": {
                        "left": "Up to",
                        "right": "50% off"
                    },
                    "message3": {
                        "left": "Special offer",
                        "right": "today"
                    },
                    "message4": {
                        "left": "This offer is valid only while you are",
                        "right": "in Dubrovnik"
                    },
                    "duration": 5000,
                    "animation": 5,
                    "slide": "slideInLeft",
                    "display": "display",
                    "mediaType": "img"
                },
                {
                    "id": 5,
                    "imgUrl": "img/unsplash6.jpg",
                    "mainText": {
                        "left": "Some of your friends bought beautiful sunglasses",
                        "right": "in Dubrovnik"
                    },
                    "title": {
                        "left": "glasses and sunglasses",
                        "right": "vista"
                    },
                    "message1": {
                        "left": "Benjamin, the sun is always shining here. Consider buying",
                        "right": "Rayban sunglasses"
                    },
                    "message2": {
                        "left": "Up to",
                        "right": "50% off"
                    },
                    "message3": {
                        "left": "Special offer",
                        "right": "till Monday"
                    },
                    "message4": {
                        "left": "This offer is valid only while you are",
                        "right": "in Dubrovnik"
                    },
                    "duration": 5000,
                    "animation": 10,
                    "slide": "slideInLeft",
                    "display": "display",
                    "mediaType": "img"
                }
            ];
            return personalizedContent;
        }


        return {
            getGenericContent: getGenericContent,
            getPersonalizedContent: getPersonalizedContent
        };
    }
}());
