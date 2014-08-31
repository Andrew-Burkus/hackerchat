var HackerChat = angular.module('hackerchat',['ngRoute']);

	HackerChat.config(function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'html/login.html',
				controller: 'LoginController'
			}).
			when('/login', {
				templateUrl: 'html/login.html',
				controller: 'LoginController'
			}).
			when('/chat', {
				templateUrl: 'html/chat.html',
				controller: 'ChatController'
			});
	});

	HackerChat.controller('MainController', ['$scope', function($scope) {

	}]);

	HackerChat.controller('LoginController', ['$scope', '$http', function($scope, $http) {
		$scope.data = {};
		$scope.submit = function() {
			$http.post('login', $scope.data).
			success(function(data) {
				alert(data);
			}).
			error(function(data) {
				alert('oh noes');
			});
		};
	}]);

	HackerChat.controller('ChatController', ['$scope', function($scope) {
		$scope.socket = io();

		$scope.send = function(msg, user) {
			socket.broadcast.emit('chat-message', {user: user, message: msg});
			$('#messages').append($('<li>')).text(msg);
		};
	}]);