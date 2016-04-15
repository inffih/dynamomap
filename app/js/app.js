var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
    .when("/", {templateUrl: "../pages/menu.html"})
    .when("/aula", {templateUrl: "../pages/lobby.html"})
    .when("/ravintola", {templateUrl: "../pages/restaurant.html"})
    .when("/kirjasto", {templateUrl: "../pages/library.html"})
    .when("/auditorio", {templateUrl: "../pages/auditorium.html"})
    .when("/kerrokset", {templateUrl: "../pages/floors.html"})
    .otherwise({redirectTo: '/'});
});
