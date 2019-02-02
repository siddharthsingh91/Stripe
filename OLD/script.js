/*
*Developed and Maintaining by:Siddharth Singh, v 01.00
*Detail:Use for Om contact form
*Author URI: http://fileworld.in/
*Email:siddharthsingh91@gmail.com
*/
<!-- The required Stripe lib -->

// This identifies your website in the createToken call below
Stripe.setPublishableKey('pk_test_cYAd1RKq2Jv3UjxPlfBWWtXV');
/*******************************************************************************
 * form ajax call for stripe start
 ******************************************************************************/
function stripeResponseHandler(status, response) {
	if (response.error) {
		// re-enable the submit button
    // Show the errors on the form
 $('#payment-form').find('.payment-errors').text(response.error.message);
 $('#payment-form').find('button').prop('disabled', false);

	} else {
		var form$ = $("#payment-form");
		// token contains id, last4, and card type
		var token = response['id'];
		// insert the token into the form so it gets submitted to the server
		form$.append("<input type='hidden' name='stripeToken' value='" + token+ "'/>");
		console.log(token);
		// and submit
		// form$.get(0).submit();
		$.ajax({
			type : 'POST',
			url : 'stripe.php',
			data : {
				'stripeToken' : token,
				'charges' : 2000
			}
		})
		.done(
				function(data) {
					var datas=String(data);
					if(datas.match(/Error/gi)){
					   jQuery("#payment-form").html("<h4 id=\"sucess_full_payment\">Something went wrong please try agin later.</h4>");	
						}else if(datas.match(/Sucess/gi)) {
					jQuery("#payment-form").html("<h1 id=\"sucess_full_payment\">Thank for your payment</h1>");
						}else{
					jQuery("#payment-form").html("<h1 id=\"sucess_full_payment\">System stop working please call to admin</h1>");		
							}
				});
	}
}


function pay_with_credit_card(){
	var card_number=Number(jQuery("#card_number").val());
	var card_password=Number(jQuery("#card_password").val());
	var exp_month=Number(jQuery("#exp_month").val());
	var exp_year=Number(jQuery("#exp_year").val());
		
  Stripe.createToken({
				number : card_number,
				cvc : card_password,
				exp_month : exp_month,
				exp_year : exp_year
			}, stripeResponseHandler);
    
}
