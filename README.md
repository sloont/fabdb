# fabdb

- ```npm createcardlist``` will both run index.js after deleting old data/cards.json file then creating a new one.
- if you have a populated ```data/cards.json```, ```npm run getallcards``` will log every card object to the console and display the number of cards at the end.

- The current size of the card database is more than 900 cards and growing. This requests 32 pages of cards from the fabdb.net/api.

- This means you cannot run the program more than once per minute.

- To test just comment out the ```for``` loop or divide ```lastPage``` by 4 or 5 inside the ```for``` condition so that you are only fetching 6-8 pages instead of all of them.

:D
