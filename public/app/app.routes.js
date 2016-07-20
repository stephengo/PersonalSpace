angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'app/views/pages/users/index2.html'
		})

		.when('/team', {
			templateUrl : 'app/views/pages/team.html'
		})

		.when('/about', {
			templateUrl : 'app/views/pages/about.html'
		})

		.when('/dash', {
			templateUrl : 'app/views/pages/dash.html'
		})

		.when('/main', {
			templateUrl : 'app/views/pages/main.html'
		})

		.when('/contact', {
			templateUrl : 'app/views/pages/contact.html'
		})

		// login page
		.when('/login', {
			templateUrl : 'app/views/pages/login.html',
   			controller  : 'mainController',
    			controllerAs: 'login'
		})

		// show all users
		.when('/users', {
			templateUrl: 'app/views/pages/main.html',
			controller: 'userController',
			controllerAs: 'user'
		})

		// form to create a new user
		// same view as edit page
		.when('/users/create', {
			templateUrl: 'app/views/pages/users/single.html',
			controller: 'userCreateController',
			controllerAs: 'user'
		})

		// page to edit a user
		.when('/users/:user_id', {
			templateUrl: 'app/views/pages/users/single.html',
			controller: 'userEditController',
			controllerAs: 'user'
		});

	$locationProvider.html5Mode(true);

});
