function SuccessMessage() {
	return {
		templateUrl: '/views/SuccessMessage.html'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
