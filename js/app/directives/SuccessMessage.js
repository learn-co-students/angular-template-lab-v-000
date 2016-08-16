function SuccessMessage() {
	return {
		templateUrl: '/templates/success.html'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
