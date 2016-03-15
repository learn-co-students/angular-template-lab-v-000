function SuccessMessage() {
	return {
		templateUrl: 'success.html'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
