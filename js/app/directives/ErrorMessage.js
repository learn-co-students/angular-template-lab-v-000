function ErrorMessage() {
	return {
		restrict: 'E',
		templateUrl: 'js/app/directives/error.html'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
