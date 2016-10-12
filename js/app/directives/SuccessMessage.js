function SuccessMessage() {
	return {		
		templateUrl: 'js/app/views/success-message.html'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
