function SuccessMessage() {
	return {
		restrict: 'E',
		templateUrl: 'js/app/directives/success.html'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
