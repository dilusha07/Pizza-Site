
function deliveryfunc(){
   console.log("d")
    document.getElementById("deliveryinfo").style.display="block"
}

function onlinepayment(){
    document.getElementById("payment").style.display="block"
}

function copydelitobilladd(){
    

  var  address,suburb,postcode;

  address=document.getElementById("deliveryAddress").value;
  suburb = document.getElementById("deliverySuburb").value;
  postcode = document.getElementById("deliveryPCode").value;
  
  document.getElementById("billaddress1").value=address;
  document.getElementById("suburb1").value = suburb;
  document.getElementById("postcode1").value =postcode;

}


function submitdetails()
{
    var postal,billPostal,pizzaOrder,ccv,fullname,cardnumber;
   
    if(document.getElementById('delivery').value.checked){
        console.log( document.getElementById('delivery').value);
         postal = document.getElementById('deliveryPCode').value;
         billPostal = document.getElementById('postcode1').value;
         pizzaOrder = document.getElementById('pizzasize').value;
    }
    if(document.getElementById("payonline").value.checked){
        console.log( document.getElementById('delivery').value);
        fullname = document.getElementById("fullname").value;
         cardnumber = document.getElementById('creditcard').value;    
         ccv = document.getElementById('ccv').value;
    }
   
    var cusName = document.getElementById('name').value;
    var cusEmail = document.getElementById('email').value;
    var cusNumber = document.getElementById('cnum').value;
    billPostal = document.getElementById('postcode1').value;
    
    var deliveryActive = document.getElementById('delivery').value;
    var cardActive =document.getElementById("payonline").value;
    console.log(cardActive);
    
   

    var errors = new Array();

    if(deliveryActive.checked && postal.length != 4){
        errors.push("Delivery Postal Code must be 4 digits length");
    }

    if(cardActive.checked){
        if(fullname == "")
            errors.push("Card Holder Name must not be empty");
        if(cardnumber == "")
            errors.push("Card Number must not be empty");
        if(ccv == "")
            errors.push("CCV field must not be empty");
    }

    if(billPostal.length != 4){
        errors.push("Billing Postal Code must be 4 digits length");
    }

    if(pizzaOrder == ""){
        errors.push("Pizza Order cannot be empty");
    }

    if(cusName == ""){
        errors.push("Customer Name cannot be empty");
    }

    if(cusEmail == ""){
        errors.push("Customer Email cannot be empty");
    }

    if(cusNumber == ""){
        errors.push("Customer Contact Number cannot be empty");
    }
   
    if(errors.length > 0){
        alert(errors.join("\n"));
    }
    else{
        alert("Order Received Successfully");
    }


}