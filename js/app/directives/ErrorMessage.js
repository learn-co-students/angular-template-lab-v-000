function ErrorMessage() {
	return {
		templateUrl: 'js/app/views/failure.html'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
