function SuccessMessage() {
	return {
		templateUrl: '/js/app/views/Success.html'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
