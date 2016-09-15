function ErrorMessage() {
	return {
		templateUrl: 'js/app/views/ErrorMessage.html'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
