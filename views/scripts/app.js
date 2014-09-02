var HackerChat = angular.module('hackerchat',['ngRoute']);

	HackerChat.config(function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'html/login.html',
				controller: 'LoginController'
			}).
			when('/chat', {
				templateUrl: 'html/chat.html',
				controller: 'ChatController'
			});
	});

	HackerChat.controller('LoginController', ['$scope', '$http', '$location', function($scope, $http, $location) {
		$scope.data = {};
		$scope.auth = function() {
			console.log($scope.data);
			$http({
            url: '/login',
            method: "POST",
            data: $scope.data,
        	}).
			success(function(data) {
				if(data.success) {
					$rootScope.user = $scope.data.nick;
					$location.path('/chat');
				}
			}).
			error(function(data) {
				alert('oh noes');
			});
		};
	}]);

	HackerChat.controller('ChatController', ['$scope', function($scope) {
		$scope.send = function(msg, user) {
			$scope.socket.broadcast.emit('chat-message', {user: user, message: msg});
			$('#messages').append($('<li>')).text(msg);
			$scope.message = '';
		};
	}]);