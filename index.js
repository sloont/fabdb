const fetch = require('node-fetch');
const fs = require('fs');

const BASE_URL = 'https://fabdb.net/api/cards';
const cards = [];

const writeToFile = async (json) => {
     fs.writeFile('data/cards.json', json, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
    });
}

const populateData = async () => {
    let results = await fetch(BASE_URL);
    let json = await results.json();
    cards.push(json.data);
    
    const lastPage = json.meta.last_page;
    console.log(lastPage + " pages of data to fetch 1/" + lastPage);

    for (let i = 2; i <= lastPage; i++) {
        results = await fetch(BASE_URL + `?page=${i}`);
        json = await results.json();
        console.log(lastPage + " pages of data to fetch " + i + "/" + lastPage);
        cards.push(json.data);
    }

    console.log("\n\n Finished fetching " + lastPage + " pages of data. \n\nWriting to file...");
    await writeToFile(JSON.stringify(cards, null, 4));

    console.log("Finished.");
}

populateData();


// + 