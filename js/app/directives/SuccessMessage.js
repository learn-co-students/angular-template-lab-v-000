function SuccessMessage() {
	return {
		templateUrl: '/js/app/views/success_message.html'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
