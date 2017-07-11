# neosavvy-react
React + GraphQL + MongoDB boilerplate

## Set up

Make sure you have node and docker installed. (Yarn is also recommended).
While having Docker running, run:

`docker-compose up`


You are going to need to set some env variables. You can do this with a `.env` file in your project:
Just fill up the following env variables to make it work:
```
#.env file
API_HOST=localhost
API_PORT=4000

MONGO_HOST=localhost
MONGO_PORT=27017
MONGO_DB=neosavvydb

AUTH_SECRET=never-tell-me-the-odds
AUTH_EXPIRY=86400
```
