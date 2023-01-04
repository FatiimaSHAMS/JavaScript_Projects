const p1 = document.getElementById("p-01");
const p2 = document.getElementById("p-02");
const p3 = document.getElementById("p-03");
const p4 = document.getElementById("p-04");
const p5 = document.getElementById("p-05");
const p6 = document.getElementById("p-06");
const p7 = document.getElementById("p-07");
const p8 = document.getElementById("p-08");
const p9 = document.getElementById("p-09");
const p10 = document.getElementById("p-10");
const countdown=document.getElementById("countdown");








            
//add item to specified array
const students =["Jane", "Joe" , "Jack" , "Jill" , "Jerome"];
const targetname = "jiLL";
const arrayOfNumbers =[4,0,-4,13,-2];
const target2=targetname.toLowerCase();


students.push('Fatima');
students.push('Sam');
students.push('Mary');

document.getElementById("target").innerHTML = targetname;


let html = `<h3>performing a case insensitive comparison for target name...</h3>`;
html += `<ul>`;
for( let i=0; i < students.length; i++){
    
    if((students[i].toLowerCase()).includes(target2)){

        html += `<li class=aside>${students[i].toLowerCase()}</li>`;
               
    }
    else{

        html += `<li>${students[i].toLowerCase()}</li>`;
       
    }
        
    }
html += `</ul>`;

p2.innerHTML += html;

p1.innerHTML += `<p>There are ${students.length} student(s) in this list.</p>`;

   
const result=students.findIndex(item=>targetname.toLowerCase()===item.toLocaleLowerCase());
    if (result !=-1){
        p5.innerHTML=`<h1 class=aside>YES! Target name was found in the list<h1>`; 
    }
    else{
        p6.innerHTML=`<h1 class=asideNO>No, Target name was NOt found in the list<h1>`;

    }
    

////////////////////////////////////////////////
html = `<h3>This is the array of numbers we will work with</h3>`;
html += `<ul>`;
for( let i=0; i < arrayOfNumbers.length; i++){
    html += `<li>${arrayOfNumbers[i]}</li>`;
}
html += `</ul>`;
p7.innerHTML += html;


//SUM ODD
var sumOdd = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if((arrayOfNumbers[i] % 2) ===1) {
            sumOdd =sumOdd+1
        }

    }

    p9.innerHTML += `<p>There are ${sumOdd} odd number(s) in the array. </p>`;

//SUM EVEN
    var sumEven = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if((arrayOfNumbers[i] %2) !==1 && arrayOfNumbers[i]!=0 ) {
            sumEven =sumEven+1
        }

    }

    p10.innerHTML += `<p>There are ${sumEven} even number(s) in the array. </p>`;



////SUM
    var sum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
    }
  
    
    p8.innerHTML += `<p>The sum of all array numbers is: ${sum} </p>`;


    ////////////COUNTDOWN

    arrayOfNumbers.forEach(function(counter){
        countdown.innerHTML +=`<h3>--------------------------</h3>`
        if (counter ==0){
            countdown.innerHTML =`<h3> Number:`+ counter +`<\h3> <p> There is no counting to be done</p>`
        }

        else if (counter>0){
            countdown.innerHTML +=`<h3> Number : </h3>`+ counter
            countdown.innerHTML += `<p>Counting down:</p>`
            for (let number=counter; number >=0; number--){
                countdown.innerHTML +=`<ul> <li>${number}</li></ul>`
            }
        
        }
    else if (counter<0){
        countdown.innerHTML +=`<h3> Number: </h3>`+counter
        countdown.innerHTML +=`<p>Counting up:</p>`
        for (let number=counter; number <=0; number++){
            countdown.innerHTML +=`<ul> <li>${number}</li></ul>`
        }
        
}
})
