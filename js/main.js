angular.module('myApp', ['ui.bootstrap']).
    config(function($routeProvider) {
        $routeProvider.
            when('/', {controller:Designer, templateUrl:'designer.html'}).
            when('/archive', {controller:Archive, templateUrl:'archive.html'}).
            when('/new', {controller:NewItem, templateUrl:'new.html'}).
            otherwise({redirectTo:'/'});
    });
function Designer ($scope) {
    $scope.heads = window.headsList;
	$scope.bodies = window.bodiesList;
	$scope.foots = window.footsList;
};

function Archive($scope) {

};

function NewItem($scope){

};

