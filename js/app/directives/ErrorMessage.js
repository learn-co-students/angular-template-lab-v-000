angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
	
function ErrorMessage() {
	return {
		templateUrl: 'js/app/views/messages/error.html'
	};
}


