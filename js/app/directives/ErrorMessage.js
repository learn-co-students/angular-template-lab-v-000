function ErrorMessage() {
	return {
		templateUrl: 'errorMessage.html'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
