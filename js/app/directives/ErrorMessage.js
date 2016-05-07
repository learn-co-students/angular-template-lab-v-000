function ErrorMessage() {
	return {
		// template: '<div>Change this error message to use templateUrl!</div>'
    templateUrl: 'error.html'

	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
