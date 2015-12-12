angular.module('authService', [])
    .factory('Auth', function($http, $q, AuthToken){

        //create auth factory Object
        var authFactory = {};

        //handle login

        //handle logout

        //check if user is logged in

        //get the user info

        //return auth factory object
        return authFactory;
    })
    .factory('AuthToken', function($window){
        var authTokenFactory = {};

        //get the token
        authTokenFactory.getToken = function(){
            return $window.localStorage.getItem('token');
        }

        //set/clear the token
        authToken.

        return authTokenFactory;
    })
    .factory('Authinterceptor', function($q, AuthToken){
        var interceptorFactory = {};

        //attach the token to every request

        //redirect if a token doesn't authenticate

        return interceptorFactory;
    });