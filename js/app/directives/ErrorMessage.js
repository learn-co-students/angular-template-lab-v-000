function ErrorMessage() {
	return {
		templateUrl: '/js/errorMessage/views/error.html'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
