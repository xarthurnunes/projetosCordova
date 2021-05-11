var app = angular.module('App',['ngRoute','controllers']);

app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){

	$routeProvider.when('/',{templateUrl: 'partials/main.html',controller: 'MainCtrl'}).
	when('/listclient',{templateUrl: 'partials/listclient.html',controller: 'ListClientCtrl'}).
	when('/newclient',{templateUrl:'partials/newclient.html',controller:'ClientCtrl'}).
	when('/addclient/:nameclient/:cpf/:email/:age',
	{templateUrl:'partials/addclient.html',controller:'AddClientCtrl'});

	$routeProvider.when('/',{templateUrl: 'partials/main.html',controller: 'MainCtrl'}).
	when('/listexercise',{templateUrl: 'partials/listexercise.html',controller: 'ListExerciseCtrl'}).
	when('/newexercise',{templateUrl:'partials/newexercise.html',controller:'ExerciseCtrl'}).
	when('/addexercise/:nameexercise/:type/:time/:calories',
	{templateUrl:'partials/addexercise.html',controller:'AddExerciseCtrl'});

	$routeProvider.when('/',{templateUrl: 'partials/main.html',controller: 'MainCtrl'}).
	when('/listimc',{templateUrl: 'partials/listimc.html',controller: 'ListImcCtrl'}).
	when('/calcimc',{templateUrl:'partials/calcimc.html',controller:'ImcCtrl'}).
	when('/addimc/:weight/:height',{templateUrl:'partials/addimc.html',controller:'AddImcCtrl'});
	
	$locationProvider.html5Mode(false).hashPrefix('!');

}]);

