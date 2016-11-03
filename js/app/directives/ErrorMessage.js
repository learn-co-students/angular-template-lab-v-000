function ErrorMessage() {
	return {
		templateUrl: 'js/app/templates/error-message.html'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
