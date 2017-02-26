var app = angular.module('myApp', ['ngMaterial', 'ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "pages/home.html"
    })
    .when("/profActivities", {
        templateUrl : "pages/professionalActivities.html"
    })
    .when("/personalCorner", {
        templateUrl : "pages/personalCorner.html"
    })
    .when("/sandbox", {
        templateUrl : "pages/sandbox.html"
    });
});
app.controller('myCtrl', function($scope) {
    $scope.currentNavItem = 'home';
});
