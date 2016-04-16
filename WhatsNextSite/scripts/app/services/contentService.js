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
                    "imgUrl": "img/band.mp4",
                    "title": {
                        "left": "Cool band",
                        "right": "playing tonight"
                    },
                    "message1": {
                        "left": "Be quick, reserve your tickets for this incredible experience",
                        "right": "today"
                    },
                    "message2": {
                        "left": "50% off for first",
                        "right": "50 reservations"
                    },
                    "message4": {
                        "left": "For more details, just scan the provided",
                        "right": "qr code"
                    },

                    "duration": 5000,
                    "animation": 0,
                    "mediaType": "video"
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
                    "mediaType": "video"
                },
                {
                    "id": 2,
                    "imgUrl": "img/swro.mp4",
                    "title": {
                        "left": "Star Wars",
                        "right": "fan?"
                    },
                    "message1": {
                        "left": "Visit location where they shot",
                        "right": "Rogue One"
                    },
                    "message2": {
                        "left": "Tour guide provided",
                        "right": "at the location"
                    },
                    "message4": {
                        "left": "Scan the qr code and we will set the destinations in your",
                        "right": "google map"
                    },
                    "duration": 5000,
                    "animation": 10,
                    "mediaType": "video"
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
                    "display": "display",
                    "mediaType": "img"
                },
                 {
                     "id": 5,
                     "imgUrl": "img/coffee.jpg",
                     "mainText": {
                         "left": "Benjamin, your favorite coffee shop is only",
                         "right": "50 meters ahead"
                     },
                     "title": {
                         "left": "Starbucks",
                         "right": ""
                     },
                     "message1": {
                         "left": "Benjamin, you should hurry up, they have free cookies",
                         "right": "till 9 AM"
                     },
                     "message2": {
                         "left": "Plus,",
                         "right": "10% discount on breakfast"
                     },
                     "message4": {
                         "left": "Your friends were also,",
                         "right": "here:"
                     },
                     "duration": 5000,
                     "animation": 10,
                     "display": "display",
                     "mediaType": "img",
                     "friends": [
                         {
                             "imgUrl": "(img/mark.jpg);"
                         },
                         {
                             "imgUrl": "(img/elon.jpg);"
                         },
                         {
                             "imgUrl": "(img/kevin.jpg);"
                         },
                         {
                             "imgUrl": "(img/bill.jpg);"
                         },
                         {
                             "imgUrl": "(img/celine.jpg);"
                         },
                         {
                             "imgUrl": "(img/BD.jpg);"
                         }
                     ]
                 },
                {
                    "id": 6,
                    "imgUrl": "img/sunglasses.jpg",
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
                    "animation": 15,
                    "display": "display",
                    "mediaType": "img"
                },
                {
                    "id": 7,
                    "imgUrl": "img/got.mp4",
                    "mainText": {
                        "left": "Since you are a big fan of Game of Thrones",
                        "right": "they were in Dubrovnik"
                    },
                    "title": {
                        "left": "Benjamin,",
                        "right": "Game of thrones was filmed here"
                    },
                    "message1": {
                        "left": "Take a look at some of the",
                        "right": "filming locations"
                    },
                    "message2": {
                        "left": "That is not all,",
                        "right": "win a great price!"
                    },
                    "message4": {
                        "left": "Hurry up while the weather is still",
                        "right": "on your side"
                    },
                    "duration": 5000,
                    "animation": 20,
                    "mediaType": "video"
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
