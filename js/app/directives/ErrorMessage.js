function ErrorMessage() {
	return {
		templateUrl: 'js/app/views/error.html'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
