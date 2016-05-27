function ErrorMessage() {
	return {
		templateUrl: '/js/app/directives/views/ErrorMessage.html'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
