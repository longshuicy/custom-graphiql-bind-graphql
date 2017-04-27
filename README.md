# custom-graphiql-bind-graphql

Make sure to install all the dependency in the top-level folder, as well as the client folder. Useful command " npm i && cd client && npm i && cd .."

client using a developing port 3000, and proxy 8080 to connect with graphql server at 8080. Take a look at the "index.js", "./client/index.js" and "./client/package.json" to change ports

after all is done, just "npm start", both the server and the client should be boosted. You can access the hacked graphiql at localhost:3000, as well as the native graphiql comes with express-graphql at localhost:8080/graphql
