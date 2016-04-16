﻿var whatsNextApp = angular.module("whatsNextApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

whatsNextApp.config(function ($routeProvider) {

    $routeProvider
        .when("/content", {
            templateUrl: "scripts/app/views/content.html",
            controller: "contentController"
        })
        .when("/test", {
            templateUrl: "scripts/app/views/test.html",
            controller: "testController"
        })
        .otherwise({ redirectTo: "/content" });
});