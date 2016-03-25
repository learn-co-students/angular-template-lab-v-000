function ErrorMessage() {
	return {
		templateUrl: 'js/app/views/errorMessage.html'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
