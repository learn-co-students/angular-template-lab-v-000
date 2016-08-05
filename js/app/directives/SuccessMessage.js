function SuccessMessage() {
	return {
		templateUrl: 'js/app/directives/success.html'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
