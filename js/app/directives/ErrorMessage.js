function ErrorMessage() {
	return {
		templateUrl: '/js/app/views/error.html'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);


// What is an EADDRINUSE error and how to solve it: https://teamtreehouse.com/community/getting-various-error-listen-eaddrinuse-30005858
