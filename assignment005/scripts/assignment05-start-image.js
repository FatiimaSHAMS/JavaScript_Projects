/*
Take note of the comments throughout this page
Follow their directions as to what to code and where
*/


/////////////////////////////////////////////////////
let partone = document.getElementById("part01")
/*
PART 1a
---------------------------------------
DEFINE A Card OBJECT
---------------------------------------
*/



class PlayCard {
    //constructor function 
      //should define all Object properties
      constructor(face, value, suit){
        this.face = face
        this.value = value
        this.suit = suit
      }
      //additional functions 
      describeSelf(){
        let html =`<img src=card-images/${this.face}_of_${this.suit}.svg>`
        return html
       }

}

/*
PART 1b
INSTANTIATE A Card OBJECT and 
display the value returned by the describeSelf() function
*/

partone.innerHTML +=`<h2>Part One: Card Object</h2>`

const playcard01 = new PlayCard ("King", 10, "Hearts")
partone.innerHTML +=  playcard01.describeSelf()


////////////////////////////////////////////////

let parttwo = document.getElementById("part02")
/*
PART 2a
---------------------------------------
DEFINE A Deck OBJECT
---------------------------------------
Note: Most of the Deck class code should
      not be modified in any way. The only
      Deck code that needs changing is inside the 
      constructor() function. Change nothing else in Deck. 
*/
class Deck{
    constructor(){
        
        //build a deck of Card objects
        //prepare arrays for all the aspects of a Card
        this.faces   = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];        
        this.values  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];        
        this.suits   = ["Spades","Clubs","Hearts","Diamonds"];  
        
        //prepare an array to store the Cards in
        this.cards = [];

        //use nested 'for' loops
        //build the Deck of Cards
        //one iteration for each suit
        //one iteration for each face/value pair
        //each time, instantiate a new Card Object
        //add new cards to the using Array.push()  
        for (let i=this.faces.length-1; i>=0; i--)  {
            for(let j=this.suits.length-1; j>=0; j--){

                this.cards.push(new PlayCard(this.faces[i], this.values[i], this.suits[j]))

            }
        }   
        console.log(this.cards) 
        

    }
}

/*
DEFINING Deck OBJECT FUNCTIONS
no changes need to be made 
in the rest of this Deck class definition.
*/
Deck.prototype.dealCard = function(){
     //remove and return the first item in array
    //and shift the index of remaining items 
    const card = this.cards.shift();
    //if we have run out of cards...
    if(card === undefined){
        return 'No more cards';
    }else{
        //return the next card in the array
        return card;
    }         
}
Deck.prototype.shuffle = function(){
 
    let j, x, i;
    //loop through the entire array
    for (i = this.cards.length - 1; i > 0; i--) {
        //randomly select a card
        j = Math.floor(Math.random() * (i + 1));
        x = this.cards[i];
        //resort cards
        this.cards[i] = this.cards[j];
        this.cards[j] = x;
    }
    //return the randomly sorted array
    return this.cards;       
}
Deck.prototype.describeSelf = function(){
    let description = "";
    description += `This deck of cards has ${this.cards.length} card(s) in it`;
    //return the above statement 'description'
    return description;
}
/*
---------------------------------------
end Deck class
---------------------------------------
*/


parttwo.innerHTML += `<h2>Part Two: Deck Object Containing Card Objects</h2>`
/*
PART 2b
INVOKE AND DISPLAY Deck OBJECT FUNCTIONS
*/
const deck01 = new Deck()

//invoke and display the Deck function describeSelf() here...
deck01.describeSelf()

//randomize the cards in the deck using shuffle()
deck01.shuffle()

//take the next card from the deck using dealCard()
let card01=deck01.dealCard()

//invoke and display the Deck function describeSelf() AGAIN here...
parttwo.innerHTML += `<h3>You've been dealt a</h3>`
parttwo.innerHTML += card01.describeSelf()
parttwo.innerHTML += `<h3>This deck of cards has ${deck01["cards"].length} card(s) in it</h3>`

//take the next card from the deck using dealCard()
let card02 = deck01.dealCard()

//invoke and display the Deck function describeSelf() AGAIN here...
parttwo.innerHTML += `<h3>You've been dealt a</h3>`
parttwo.innerHTML += card02.describeSelf()
parttwo.innerHTML += `<h3>This deck of cards has ${deck01["cards"].length} card(s) in it</h3>`





////////////////////////////////////////////////////
let partthree = document.getElementById("part03")
/*
PART 3a
---------------------------------------
DEFINE A Player OBJECT
---------------------------------------
*/
partthree.innerHTML = `<h2>Part Three: Player Objects Using a Deck Object and several Cards</h2>`

class Player{
    constructor(name){
        this.name= name
        this.hand=[]
    }

    addCardToHand(aCard){
        this.hand.push(aCard)
    }

    describeSelf(){
        let html =`<h3>${this.name}'s Hand:</h3>`
        html += `<div class="image">`
        this.hand.forEach(function(eachcard){
            html += `<img src=card-images/${eachcard["face"]}_of_${eachcard["suit"]}.svg>`
            
        });
        html += `</div>`
        return html
        
    }
}




/*
PART 3b
Instantiate at least two Player OBJECTs
Instantiate a new Deck and shuffle() it
Deal five Cards to each Player
Display each players hand to the browser
*/

const play01 = new Player("Fatima")
const play02 = new Player("Babak")
const newdeck = new Deck()
newdeck.shuffle()
while (play01["hand"].length < 5) {
    let card = newdeck.dealCard()
    play01.addCardToHand(card)
}
partthree.innerHTML += play01.describeSelf()

while (play02["hand"].length < 5) {
    let card = newdeck.dealCard()
    play02.addCardToHand(card)
}
partthree.innerHTML += play02.describeSelf()
