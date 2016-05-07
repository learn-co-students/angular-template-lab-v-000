function SuccessMessage() {
	return {
		templateUrl: 'views/success.html'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
