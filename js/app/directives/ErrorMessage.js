function ErrorMessage() {
	return {
		templateUrl: 'views/ErrorMessage.html'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
