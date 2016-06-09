function ErrorMessage() {
	return {
		templateUrl: 'js/app/views/error_message.html'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
