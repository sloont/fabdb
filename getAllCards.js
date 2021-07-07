
//gets all cards and logs them with the number of them.

const cardList = require('./data/cards.json');


cardList.forEach(card => console.log(card));

console.log(cardList.length + " cards.\n");
    


