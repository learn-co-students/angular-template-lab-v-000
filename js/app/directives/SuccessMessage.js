function SuccessMessage() {
	return {
		templateUrl: 'js/app/views/successMessage.html'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
