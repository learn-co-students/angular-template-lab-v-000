function SuccessMessage() {
	return {
		templateUrl: 'js/app/views/SuccessMessage.html'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
