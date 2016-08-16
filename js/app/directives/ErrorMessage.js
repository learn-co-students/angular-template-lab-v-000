function ErrorMessage() {
	return {
		templateUrl: '/templates/error.html'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
