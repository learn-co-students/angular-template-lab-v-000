function SuccessMessage() {
	return {
		template: '<div>Change this success message using templateUrl!</div>'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
