function SuccessMessage() {
	return {
		templateUrl: '/js/successMessage/views/success.html'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
