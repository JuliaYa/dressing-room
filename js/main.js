function HeadsList ($scope) {
	$scope.heads = window.headsList;
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