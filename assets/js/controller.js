var app = angular.module('myApp', ['ngMaterial', 'ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "pages/home.html"
    })
    .when("/experience", {
        templateUrl : "pages/experience.html"
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

app.controller('DemoCtrl', function($scope) {
  $scope.industryKnowledge = [
    "test",
    "test2",
    "test3",
  ];
});
