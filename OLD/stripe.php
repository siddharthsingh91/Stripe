<?php
require 'lib/Stripe.php'; 
if ($_POST) {
Stripe::setApiKey("sk_test_R88qeoHDWpy993djCiRUXzUv");
$error = '';
$success = '';
try {
if (!isset($_POST['stripeToken']))
throw new Exception("The Stripe Token was not generated correctly");
Stripe_Charge::create(array("amount" => $_POST['charges'], "currency" => "usd", "card" => $_POST['stripeToken']));
$success = 'Your payment was successful.';
}
catch (Exception $e) {
$error = $e->getMessage();
}} ?>
<?php if($error) { 
echo "Error";
 } if($success) {
echo "Sucess";
 } ?> 
