function ErrorMessage() {
	return {
		templateUrl: 'js/app/views/errormessage.html'	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
