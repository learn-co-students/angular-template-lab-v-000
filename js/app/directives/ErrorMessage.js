function ErrorMessage() {
	return {
		templateUrl: 'js/app/views/error-message.html'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
