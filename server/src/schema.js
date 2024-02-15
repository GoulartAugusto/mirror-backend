const gql = require('graphql-tag');

const typeDefs = gql`
    type Query {
        "Query to get events array for the homepage grid"
        eventsForHome: [Event!]
        "Fetch a specific event, previded a event's ID"
        event(id: ID!): Event!
    }

    type Mutation {
        createNewEvent(id: ID!): CreateNewEventResponse!
    }

    type CreateNewEventResponse {
        "Similar to HTTP status code, represents the status of the mutation"
        code: Int!
        "Indicates wheter the mutation was sucessful"
        success: Boolean!
        "Human readable description for UI"
        message: String!
        "Newly created Event after successful mutation"
        event: Event
    }

    "A Event, is a scheduled event tha will occur in a determinated time"
    type Event {
        id: ID
        "The Event's Title"
        title: String!
        "The Event's Description"
        description: String!
        "The Event's Image that will be displayed on the UI"
        image: String!
        "The date and time when the event was scheduled"
        date: Date!
    }
`

module.exports = typeDefs;