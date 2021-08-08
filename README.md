# CryptoSIM Official API

This is the API used by the CryptoSIM website. It's 100% open-source so feel free to contribute by opening a pull request. We use this API in order to handle signups, logins and database updating. This is also used to log tokens and store stuff in the user cookies. Here have one by the way 🍪.

## How it works

In order not to work directly with the Mongo Database, we established an API that does all the requests and database handling for us. This works via http requests.

## Self-Hosting a similar API

A few commands and manipulations are required. You can host the exact same API, modify it for personnal use but you can't distribute this version nor modified one. 

To run your own version (for contribution):

- Create a .env file, and include and `API_KEY` as well as a `MONGOURI` that connects to your application.
- Run the `npm init -y` and `npm install` command. This installs all the required modules for the API to work.
- Finally, run the `npm run dev` command in order to run the application. This will start an express server on the port 4000. *You can change this default port in the `index.js` file*.
  
## Contribution and Forks

Feel free to fork the project using the normal Github feature. You can then work on your own version of the API. When you feel ready to contribute, use Github Desktop or any other Github tools to create a pull request explaining what features you are trying to include. Have fun :)