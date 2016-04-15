(function () {
    'use strict';

    angular.module('whatsNextApp').factory('dataService', dataservice);

    dataservice.$inject = ['$http', 'apiUrl'];

    function dataservice($http, apiUrl) {
        var service = {
            getAll: getAll,
            getEntity: getEntity,
            deleteEntity: deleteEntity,
            updateEntity: updateEntity,
            saveEntity: saveEntity
        };

        return service;

        function deleteEntity(model, id) {
            return $http.delete(apiUrl + model + '/' + id).then(onSuccess, onError);
        }

        function getEntity(model, id) {
            return $http.get(apiUrl + model + '/' + id).then(onSuccess, onError);
        }

        function saveEntity(model, entity) {
            return $http.post(apiUrl + model, entity).then(onSuccess, onError);
        }

        function updateEntity(model, entityId, entity) {
            return $http.put(apiUrl + model + '/' + entityId, entity).then(onSuccess, onError);
        }

        function getAll(model) {
            return $http.get(apiUrl + model).then(onSuccess, onError);
        }

        function onSuccess(response) {
            return response.data;
        }

        function onError(err) {
            return err;
        }
    }
})();
