/*
these data points represent different 
aspects of the show...
(do not change these values)
*/
const ticketCostDollarsCDN      = 30;
const minimumAgeToAttend        = 21;
const taxRate                   = 0.10;

/*
these data points represent information
about the current user
NOTE: since this data would in theory be
supplied by the user, all values 
(even numeric) here are strings... 
- change these values as you test your script!
*/
const userName              = "Shania Smith";
const age                   = "21";
const cashOnHandDollarsCDN  = "320";
const quantityOfTickets     = "3";

document.getElementById("User2").innerHTML = userName;
document.getElementById("User3").innerHTML = userName;
document.getElementById("User").innerHTML = userName;
document.getElementById("Age").innerHTML = age;
document.getElementById("Cash").innerHTML = cashOnHandDollarsCDN;
document.getElementById("Quantity").innerHTML = quantityOfTickets;
document.getElementById("CostPerTicket").innerHTML = ticketCostDollarsCDN;
document.getElementById("MinAge").innerHTML = minimumAgeToAttend;
document.getElementById("Tax").innerHTML = taxRate;

/* P Out*/
const p1 = document.getElementById("p-01");
const p2 = document.getElementById("p-02");
const p3 = document.getElementById("p-03");
const p4 = document.getElementById("p-04");
const p5 = document.getElementById("p-05");
const p6 = document.getElementById("p-06");








if(age < minimumAgeToAttend){
    //'if' true run the code in {} body
    p1.innerHTML = 'Your age is minor';
}else if(age >= minimumAgeToAttend){
    //'if' false run code in 'else' {} body
    p1.innerHTML = 'So your age is enough';
}

if(((quantityOfTickets*ticketCostDollarsCDN)/100) + (quantityOfTickets*ticketCostDollarsCDN) < (cashOnHandDollarsCDN)){
    p2.innerHTML = 'So You can buy tickets';
    p3.innerHTML= (quantityOfTickets*ticketCostDollarsCDN);
    p4.innerHTML=((quantityOfTickets*ticketCostDollarsCDN)/100) + (quantityOfTickets*ticketCostDollarsCDN);
}else {
    //'if' false run code in 'else' {} body
    p2.innerHTML = 'So You can not buy tickets';
}


if(age < minimumAgeToAttend){
    p5.innerHTML='Warning! sorry, you would need to be' + (minimumAgeToAttend - age) +'older';

} else if (((quantityOfTickets*ticketCostDollarsCDN)/100) + (quantityOfTickets*ticketCostDollarsCDN)>cashOnHandDollarsCDN){
    p5.innerHTML='you dont have enough money to buy the ticket'+((cashOnHandDollarsCDN)-((quantityOfTickets*ticketCostDollarsCDN)/100) + (quantityOfTickets*ticketCostDollarsCDN))+'more to buy tickets';

}else{
    p5.innerHTML='Confirming The perchase'
    p6.innerHTML="Let's Go"
}










