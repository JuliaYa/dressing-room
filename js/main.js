function HeadsList ($scope) {
	$scope.heads = window.headsList;
	$scope.heads[0].selected = "selected";
 };

function BodyesList ($scope) {
	$scope.bodyes = window.bodiesList;
	$scope.bodyes[0].selected = "selected";
};
 
function FootsList ($scope) {
	$scope.foots = window.footsList;
	$scope.foots[0].selected = "selected";
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