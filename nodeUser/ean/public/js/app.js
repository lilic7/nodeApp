angular.module('routerApp', ['routerRoutes', 'ngAnimate'])
    .controller('mainController', function(){
        var vm = this;

        vm.bigMessage = "Marea albastra este casa noastra!";
    })
    .controller('homeController', function(){
        var vm = this;
        vm.message = "Home Page";
    })
    .controller('aboutController', function(){
        var vm = this;

        vm.message = "About page";
    })
    .controller('contactController', function(){
        var vm = this;
        vm.message = "Contact us";
    });