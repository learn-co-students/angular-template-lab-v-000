function SuccessMessage() {
	return {
		templateUrl: 'js/app/templates/successtemplate.html'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
