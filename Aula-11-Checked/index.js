//
const subscribe = document.getElementById("myCheckbox");
const mastercard = document.getElementById("mastercardBtn");
const visa = document.getElementById("visaBtn");
const paypal = document.getElementById("paypalBtn");
const submit = document.getElementById("submitBtn");
const subscibreinfo = document.getElementById("subscribeInfo");
const paymentinfo = document.getElementById("paymentInfo");


submit.onclick = function(){
    if(subscribe.checked){
        subscibreinfo.textContent = "Você está inscrito.";
        
    }
    else{
        subscibreinfo.textContent = "Você não está inscrito."
    };
    if(mastercard.checked){
        paymentinfo.textContent = "Você pagou utilizando Mastercard."
    }
    else if (paypal.checked){
        paymentinfo.textContent = "Você pagou utilizando Paypal."    
    }
    else if (visa.checked){
        paymentinfo.textContent = "Você pagou utilizando Visa."    
    }
}