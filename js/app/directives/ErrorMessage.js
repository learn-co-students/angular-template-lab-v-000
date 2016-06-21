function ErrorMessage() {
	return {
		template: '<div>Change this error message to use templateUrl!</div>'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
