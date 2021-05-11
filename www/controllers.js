var appControllers = angular.module('controllers',[]);

appControllers.controller('ClienteCtrl',['$scope','$location',function($scope,$location){
	$scope.enviar=function(){
		$location.path('/addclient/'+$scope.nameclient+'/'+$scope.cpf+'/'+$scope.age+'/'+$scope.email);
	};
}]);

appControllers.controller('AddClientCtrl',['$scope','$routeParams',function($scope,$routeParams){

	$scope.nnameclient = $routeParams.nameclient;
	$scope.ncpf = $routeParams.cpf;
	$scope.nemail = $routeParams.email;
	$scope.nage = $routeParams.age;


	console.log('Marcelinho Luiz do Raça Negra');
}]);

		appControllers.controller('ExerciseCtrl',['$scope','$location',function($scope,$location){
			$scope.enviar=function(){
				$location.path('/addexercise/'+$scope.nameexercise+'/'+$scope.type+'/'+$scope.time+'/'+$scope.calories);
	};
}]);

	appControllers.controller('AddExerciseCtrl',['$scope','$routeParams',function($scope,$routeParams){
	
		$scope.nnameexercise = $routeParams.nameexercise;
		$scope.ntype = $routeParams.type;
		$scope.ntime = $routeParams.time;
		$scope.ncalories = $routeParams.calories;
	
	console.log('Marcelinho tartaruga ninja');
	}]);

		appControllers.controller('ImcCtrl',['$scope','$location',function($scope,$location){
			$scope.send=function(){
				$location.path('/addimc/'+$scope.weight+'/'+$scope.height);
		};
	}]);

		appControllers.controller('AddImcCtrl',['$scope','$routeParams',function($scope,$routeParams){

			$scope.nweight = $routeParams.weight;
			$scope.nheight = $routeParams.height;
			$scope.nimc = $routeParams.weight / ($routeParams.height * $routeParams.height);
			
			console.log('NINGUEM MAIS USA MONGO E CORDOVA!');
		}]);