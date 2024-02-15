const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

const { readFileSync } = require('fs')
const gql = require('graphql-tag')

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const EventAPI = require('./datasources/events-api');

async function startApolloServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
  
    const port = 4001
    const { url } = await startStandaloneServer(server, {
      context: async () => {
        const { cache } = server;
  
        return {
          dataSources: {
            trackAPI: new EventAPI({ cache }),
          },
        };
      },
      listen: { port }
    });
  
    console.log(`
      🚀  Server is running
      📭  Query at ${url}
    `);
  }
  
  startApolloServer();

  // First create this, upload at Railway and create the queries with Apollo Studio

{/*

The parameters to create the queries and create the mutations are these
  {
      id: 1,
      title: "This is a really cool title btw",
      description: "This is a really cool title btw and everyone likes it a lot",
      image: "/images/BackgroundImage.png",
      date: "01/11/2023"
  }


*/}