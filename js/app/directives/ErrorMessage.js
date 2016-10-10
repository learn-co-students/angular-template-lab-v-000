function ErrorMessage() {
	return {
		templateUrl: 'js/app/views/ErrorTemplate.html'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
