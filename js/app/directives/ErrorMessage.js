function ErrorMessage() {
	return {
		templateUrl: 'js/app/directives/error.html'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
