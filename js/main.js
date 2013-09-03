angular.module('designer', ['ui.bootstrap']);
function HeadsList ($scope) {
    $scope.slides = window.headsList;
 };

function BodyesList ($scope) {
	$scope.slides = window.bodiesList;
};
 
function FootsList ($scope) {
	$scope.slides = window.footsList;
}


var Disigner = (function(){
	
	var init = function(){
		if(listClothes){
			var img = document.getElementById("testImg").src = listClothes[0].url;
		}
	};

	return {
		init: init
	}
})();

(function(){
	//Disigner.init();
})();