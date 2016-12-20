function ErrorMessage() {
	return {
		templateUrl: 'js/app/templates/errortemplate.html'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
