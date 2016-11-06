function SuccessMessage() {
	return {
		templateUrl: 'js/app/success.html'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
