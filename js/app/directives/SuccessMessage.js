function SuccessMessage() {
	return {
		templateUrl: 'js/app/views/success.html'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
