function SuccessMessage() {
	return {
		templateUrl: 'sucess.html'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
