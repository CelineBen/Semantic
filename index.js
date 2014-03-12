$(document).ready(function(){

	var signInModal = $('#sign-in-modal');
	var resetPasswordModal = $('#reset-password-modal');

	$('#button-signin').click(function(){
		signInModal.modal('show');
	});	
	
	$('#cancel-reset-password').click(function(){
		signInModal.modal('show');
		resetPasswordModal.modal('hide');		
	});	
	
	$('#cancel-sign-in').click(function(){
		signInModal.modal('hide');
	});	
	
	$('.ui.dropdown').dropdown();
	
	var validationRules = {
		firstName: {
		  identifier  : 'first-name',
		  rules: [
			{
			  type   : 'empty',
			  prompt : 'Please enter your first name'
			},
			{
			  type   : 'empty',
			  prompt : 'Please enter your first name'
			}
		  ]
		},
		lastName: {
		  identifier  : 'last-name',
		  rules: [
			{
			  type   : 'empty',
			  prompt : 'Please enter your last name'
			}
		  ]
		},
		email: {
		  identifier : 'email',
		  rules: [
			{
			  type   : 'empty',
			  prompt : 'Please enter your email'
			},
			{
			  type   : 'email',
			  prompt : 'The email entered is not valid'
			}
		  ]
		},
		reEmail: {
		  identifier : 're-email',
		  rules: [
			{
			  type   : 'empty',
			  prompt : 'Please validate your email'
			},
			{
			  type   : 'match[email]',
			  prompt : 'This email does not match the first one'
			}
		  ]
		},
		password: {
		  identifier : 'password',
		  rules: [
			{
			  type   : 'empty',
			  prompt : 'Please enter a password'
			},
			{
			  type   : 'length[6]',
			  prompt : 'Your password must be at least 6 characters'
			}
		  ]
		},
		month: {
		  identifier : 'month',
		  rules: [
			{
			  type   : 'empty',
			  prompt : 'Enter a month'
			}
		  ]
		},
		day: {
		  identifier : 'day',
		  rules: [
			{
			  type   : 'empty',
			  prompt : 'Enter a day'
			}
		  ]
		},
		year: {
		  identifier : 'year',
		  rules: [
			{
			  type   : 'empty',
			  prompt : 'Enter a year'
			}
		  ]
		},
		terms: {
		  identifier : 'terms',
		  rules: [
			{
			  type   : 'checked',
			  prompt : 'You must agree to the terms and conditions'
			}
		  ]
		}
	};
	
	
	$('.ui.form').form(validationRules, {
		inline : true,
    	on     : 'blur',
    	transition: 'fade down'
  });
});

function showResetPasswordModal(){
	$('#reset-password-modal').modal('hide others').modal('show');
}