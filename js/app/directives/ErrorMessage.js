function ErrorMessage() {
	return {
		templateUrl: 'error.html'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
