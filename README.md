# SocialMonitorGraphQL
SocialMonitor project based on GraphQL

running instruction:

Make sure to install all the dependency in the top-level folder, as well as the client folder. Useful command " npm install && cd client && npm install && cd .."

client using a developing port 3000, and proxy 8080 to connect with graphql server at 8080. Take a look at the "bin/www", "./client/index.js" and "./client/package.json" to change ports
 
after all is done, just "npm start", both the server and the client should both be boosted up. You can access the hacked graphiql at localhost:3000, as well as the native graphiql comes with express-graphql at localhost:8080/graphql

