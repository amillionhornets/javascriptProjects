var cardsSelected = 0;
var firstCard="";
var secondCard="";
// on load the randomize colors will assign each div a random color in the class and assign
//  the divs a hidden class
function randomizeColors(){
    // all 16 colors that will be randomized
    const colorsRand = ["blue","green","purple","yellow","red","orange","pink","magenta","blue","green","purple","yellow","red","orange","pink","magenta"];
    // Selects all the divs
    const allDivs = [...document.querySelectorAll(".card")];
    // the numbers that have already been used
    let usedNumsPos = [];
    let usedNumsColor = [];
    // random card position
    let cardPos = 0;
    let colorPos = 0;
    // Create 16 unique numbers that are 0 - 15 and connect the color to that div
    for (let a = 0; a < 16; a++) {
        // creates the random number and makes sure it hasn't been used before hand
        cardPos = parseInt(Math.random() * (16 - 0));
        colorPos = parseInt(Math.random() * (16 - 0));
        while(usedNumsPos.includes(cardPos)){
            cardPos = parseInt(Math.random() * (16 - 0));
        }
        while(usedNumsColor.includes(colorPos)){
            colorPos = parseInt(Math.random() * (16 - 0));
        }
        // adds the random color and hidden class
        allDivs[cardPos].className += colorsRand[colorPos] + " " + "hidden";
        usedNumsPos.push(cardPos);
        usedNumsColor.push(colorPos);
    }
}
// stores the info of each clicked card then sees if the users is correct.
// If the user isn't correct resets the cards
// If the user is correct then keeps the colors and makes the cards not clickable.
function cardClicked(e){
    // the current div
    let ele = e.currentTarget;
    // all colors
    let colors = ["blue", "green", "purple", "yellow", "red", "orange", "pink", "magenta"]
    // Finds out what color the first card is and shows the color to the user
    if(cardsSelected == 0){
        if(ele.classList.contains("hidden")){
            ele.classList.remove("hidden");
            for(i = 0; i < colors.length; i++){
                if(ele.classList.contains(colors[i])){
                    firstCard = colors[i];
                    cardsSelected++;
                    ele.setAttribute("id", "1");
                    break;
                }
            }
        }
    // Finds out what color the second card is and shows the color to the user
    }else if(cardsSelected == 1){
        if(ele.classList.contains("hidden")){
            ele.classList.remove("hidden");
            for(i = 0; i < colors.length; i++){
                if(ele.classList.contains(colors[i])){
                    secondCard = colors[i];
                    cardsSelected++;
                    ele.setAttribute("id", "2");
                    break;
                }
            }
        }
    }
    // If the user is right(the cards are the same color and they selected two cards)
    //  remove the on click and the card's id
    if(firstCard == secondCard && cardsSelected == 2){
        document.getElementById("1").removeAttribute("onclick");
        document.getElementById("2").removeAttribute("onclick");
        document.getElementById("1").removeAttribute("id");
        document.getElementById("2").removeAttribute("id");
        cardsSelected = 0;
    // If the user is wrong, make the cards hidden again and remove ids
    }else if(firstCard != secondCard && cardsSelected == 2){
        preventClick = true;
        let card1 = document.getElementById("1");
        let card2 = document.getElementById("2");
        if(!ele.classList.contains("hidden")){
            setTimeout(() => { card2.classList.add("hidden"); preventClick = false;}, 500);
            cardsSelected = 0;
        }
        if(!card1.classList.contains("hidden")){
            document.getElementById("1").removeAttribute("id");
            document.getElementById("2").removeAttribute("id");
            setTimeout(() => { card1.classList.add("hidden"); preventClick = false;}, 500);
            cardsSelected = 0;
        }
    }
}