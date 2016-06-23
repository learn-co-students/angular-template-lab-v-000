angular
	.module('app')
	.directive('successMessage', SuccessMessage);
	
function SuccessMessage() {
	return {
		templateUrl: 'js/app/views/messages/success.html'
	};
}


