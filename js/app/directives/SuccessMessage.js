function SuccessMessage() {
	return {
		templateUrl: '/js/app/directives/views/SuccessMessage.html'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
