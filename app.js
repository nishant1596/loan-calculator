const loan_form=document.getElementById('loan-form');
loan_form.addEventListener('submit',(e)=>{
  document.querySelector('#loading').style.display='block';

  document.querySelector('#results1').style.display='none';
  setTimeout(calculateResults,500);
    e.preventDefault();
});

const amount=document.querySelector('#amount');
const interest=document.querySelector('#interest');
const years=document.querySelector('#years');
const monthly_pay=document.querySelector('#monthly-payment');
const total_pay=document.querySelector('#total-payment');
const total_interest=document.querySelector('#total-interest');
//calculating results
function calculateResults() {

  const principal=parseFloat(amount.value);
  console.log(principal);
  const rate=parseFloat(interest.value)/100;
  console.log(rate);
  const time=years.value;
  console.log(time);
if(isFinite(principal) && isFinite(rate) && isFinite(time)){
  const totalInterest=parseFloat(principal*rate*time).toFixed(2);
  console.log(totalInterest);
  total_interest.value=`total interest `+totalInterest;
  const totalPayment=parseFloat(principal+totalInterest).toFixed(2);
  console.log(totalPayment);
  total_pay.value=`total payment=`+totalPayment;
  const monthlyPayment=(parseFloat(totalPayment)/12).toFixed(2);
  console.log(monthlyPayment);
  monthly_pay.value=`monthly payment=`+monthlyPayment;

  document.querySelector('#results1').style.display='block';
  document.querySelector('#loading').style.display='none';
}
else{
console.log('please check the error');
const errorbox=document.querySelector('#errorbox')
errorbox.className='alert alert-danger alert-dismissable';
errorbox.innerHTML=`<button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>Error!</strong> Please fill all the details.`;
    document.querySelector('#loading').style.display='none';

}


}


























// // Listen for submit
// document.getElementById('loan-form').addEventListener('submit', function(e){
//   // Hide results
//   document.getElementById('results').style.display = 'none';
//
//   // Show loader
//   document.getElementById('loading').style.display = 'block';
//
//   setTimeout(calculateResults, 2000);
//
//   e.preventDefault();
// });
//
// // Calculate Results
// function calculateResults(){
//   console.log('Calculating...');
//   // UI Vars
//   const amount = document.getElementById('amount');
//   const interest = document.getElementById('interest');
//   const years = document.getElementById('years');
//   const monthlyPayment = document.getElementById('monthly-payment');
//   const totalPayment = document.getElementById('total-payment');
//   const totalInterest = document.getElementById('total-interest');
//
//   const principal = parseFloat(amount.value);
//   const calculatedInterest = parseFloat(interest.value) / 100 / 12;
//   const calculatedPayments = parseFloat(years.value) * 12;
//
//   // Compute monthly payment
//   const x = Math.pow(1 + calculatedInterest, calculatedPayments);
//   const monthly = (principal*x*calculatedInterest)/(x-1);
//
//   if(isFinite(monthly)) {
//     monthlyPayment.value = monthly.toFixed(2);
//     totalPayment.value = (monthly * calculatedPayments).toFixed(2);
//     totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
//
//     // Show results
//     document.getElementById('results').style.display = 'block';
//
//     // Hide loader
//     document.getElementById('loading').style.display = 'none';
//
//   } else {
//     showError('Please check your numbers');
//   }
// }
//
// // Show Error
// function showError(error){
//   // Hide results
//   document.getElementById('results').style.display = 'none';
//
//   // Hide loader
//   document.getElementById('loading').style.display = 'none';
//
//   // Create a div
//   const errorDiv = document.createElement('div');
//
//   // Get elements
//   const card = document.querySelector('.card');
//   const heading = document.querySelector('.heading');
//
//   // Add class
//   errorDiv.className = 'alert alert-danger';
//
//   // Create text node and append to div
//   errorDiv.appendChild(document.createTextNode(error));
//
//   // Insert error above heading
//   card.insertBefore(errorDiv, heading);
//
//   // Clear error after 3 seconds
//   setTimeout(clearError, 3000);
// }
//
// // Clear error
// function clearError(){
//   document.querySelector('.alert').remove();
// }
