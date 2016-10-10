function SuccessMessage() {
	return {
		templateUrl: 'js/app/views/SuccessTemplate.html'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
