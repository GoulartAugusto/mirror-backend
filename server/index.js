const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { buildSubgraphSchema } = require('@apollo/subgraph')
const { readFileSync } = require('fs')
const gql = require('graphql-tag')

//const typeDefs = require('./schema');
const typeDefs = gql(readFileSync('./events.graphql', { encoding: 'utf-8' }))
const resolvers = require('./resolvers');
const EventAPI = require('./datasources/events-api');

async function startApolloServer() {
    const server = new ApolloServer({
      schema: buildSubgraphSchema({ typeDefs, resolvers })
    });
  
    const port = 4001
    const subgraphName = 'events'

    try {
      const { url } = await startStandaloneServer(server, {
        context: async () => {
          return {
            dataSources: {
              eventAPI: new EventAPI(),
            }
          }
        },
        listen: { port },
      })

      console.log(` Subgraph ${subgraphName} is runting at ${url}`)
    } catch (err) {
      console.log(err)
    }
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

{/*

The old server configuration

    // const { url } = await startStandaloneServer(server, {
    //   context: async () => {
    //     const { cache } = server;
  
    //     return {
    //       dataSources: {
    //         trackAPI: new EventAPI({ cache }),
    //       },
    //     };
    //   },
    //   listen: { port }
    // });
  
    // console.log(`
    //   🚀  Server is running
    //   📭  Query at ${url}
    // `);

*/}

{/*

the old data that was on the first version of the card to create the query

    type Event @key(fields: "id") {
        id: ID!
        "The Event's Title"
        title: String!
        "The Event's Description"
        description: String!
        "The Event's Image that will be displayed on the UI"
        image: String!
        "The date and time when the event was scheduled"
        date: String!
    }
    
*/}