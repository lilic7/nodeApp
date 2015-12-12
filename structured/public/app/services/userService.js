angular.module('userService', [])
    .factory('User', function($http){
        var userFactory = {};

        //get single user
        userFactory.get = function (id){
            return $http.get('/api/users/'+id);
        };

        userFactory.all = function(){
            return $http.get('/api/users/');
        };

        userFactory.create = function(userData){
            $http.post('/api/users/', userData);
        };

        userFactory.update = function(id, userData){
            $http.put('/api/users/'+id, userData);
        };

        userFactory.delete = function(id){
            $http.delete('/api/users/'+id);
        };

        return userFactory;
    });