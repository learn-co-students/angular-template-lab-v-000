function SuccessMessage() {
	return {
		templateUrl: 'js/app/templates/success-message.html'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
