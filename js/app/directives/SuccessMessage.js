function SuccessMessage() {
	return {
		templateUrl: 'successMessage.html'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
