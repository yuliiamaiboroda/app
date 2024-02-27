To start the server write npm start.

But before that, to initialize the tables in the database, you can write ./src/setup.js.

I used PostgreSQL because it says I can use any database.

Also, you need to insert your data into the .env file, I have it standard in this format:
```
PORT=3005
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=postgres
DB_DATABASE=postgres
```

And so, to add text to the database, you need to send a POST request to /text with the required parameters in the body of the request title.

To change the text, you need to send a request to /text/:textId and specify the new title in the body.

You can also get all the data by sending a get request to the address /text.

Also, each creation or update of text will add +1 to count, the current indicator can be obtained by get request to /count (it is also saved in the database).
