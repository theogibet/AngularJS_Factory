

'use strict';

angular.module('myApp.view1', [
		'ngRoute'
	])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'view1/view1.html',
			controller: 'View1Ctrl'
		});
	}])

	.controller('View1Ctrl', View1Ctrl);

function View1Ctrl($scope, $http, Items) {
	this.input = $scope.input;
  $scope.items = Items.get();


	$scope.getfact = function () {
		if (this.input == "") {
			alert("Veuillez remplir le champ");
			return (84);
		}
		var reg = new RegExp("^(1[0-2]|[1-9])[/]([1-9]|[12][0-9]|3[01])$", "g");

		if (reg.test(this.input) == false) {
			alert("Mauvais format de date, veuillez vous référer à l'exemple");
			this.input = ""
			return (84);
		}
		$http.get('http://localhost:3000/info?date=' + this.input).then(response => {
			this.content = response.data;
		})

		Items.post(this.input, this.content)
		this.input = "";

	}
}


//   $scope.maFonctionPromesse = async function (url) {
//       console.log("Url ", url)
//       $http.get('http://localhost:3000/info?date=' + url).then(response => {        Promesse qui n'as pas fonctionné ?
//         this.body = response.data;
//         console.log("Response", response.data)
//       })
//       console.log("content", this.body)
//       return (this.content)
//   }
// }
