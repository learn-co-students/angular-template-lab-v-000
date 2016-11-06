function ErrorMessage() {
	return {
		templateUrl: 'js/app/error.html'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
