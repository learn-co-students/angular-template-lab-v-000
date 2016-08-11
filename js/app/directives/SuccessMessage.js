function SuccessMessage() {
	return {
		templateUrl: 'js/app/templates/success.html'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
