function ErrorMessage() {
	return {
		templateUrl: 'js/app/templates/error.html'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
