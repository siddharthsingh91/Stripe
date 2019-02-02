<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
<title>Stripe Getting Started Form</title>
<!-- The required Stripe lib -->
<script type="text/javascript" src="https://js.stripe.com/v2/"></script>
<!-- jQuery is used only for this example; it isn't required to use Stripe -->
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="script.js" type="text/javascript"></script>
</head>
<body>
<h1>Charge $20 with Stripe</h1>
<form action="" id="payment-form">
<span class="payment-errors"></span>
<div class="form-row">
<label>
<span>Card Number</span>
<input type="text" size="20" data-stripe="number" id="card_number" value=""/>
</label>
</div>
 
<div class="form-row">
<label>
<span>CVC</span>
<input type="text" size="4" data-stripe="cvc" id="card_password" value=""/>
</label>
</div>
 
<div class="form-row">
<label>
<span>Expiration (MM/YYYY)</span>
<input type="text" size="2" data-stripe="exp-month" id="exp_month" value=""/>
</label>
<span> / </span>
<input type="text" size="4" data-stripe="exp-year" id="exp_year" value=""/>
</div>
 
<button type="button" class="" onclick="pay_with_credit_card()">Submit Payment</button>
</form>
</body>
</html> 