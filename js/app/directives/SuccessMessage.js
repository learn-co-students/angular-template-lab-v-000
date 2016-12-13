function SuccessMessage() {
	return {
		templateUrl: 'js/app/views/successmessage.html'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
