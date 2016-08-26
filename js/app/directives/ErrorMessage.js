function ErrorMessage() {
	return {
		templateUrl: 'js/app/views/Error.html'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
