//const { RESTDataSource } = require('@apollo/datasource-rest');
let { events } = require('./events_data.json')

class EventAPI {
    getAllEvents() {
        return events
    }

    getEvent(id) {
        return events.find(e => e.id === id)
    }

    createNewEvent(event) {
        const createEvent = { id: `rev-${events.length + 1}`, ...event }
        events = [...events, createEvent]
        return createEvent
    }
}

module.exports = EventAPI;

{/*

    To implement the queries and the Mutation just use these following methods on front-end aplication

    Query for All Events:

    query allEvents {
        events {
            id
            title
            description
        }
    }

    _____

    Query to Get a Single Event by ID

    query singleEvent($eventId: ID!) {
        event(id: $eventId) {
            id
            title
            description
        }
    }   

    _____

    Mutation to create a Event that goes to events_data.json

    mutation submitNewEvent($newEvent: NewEventInput) {
        submitNewEvent(newEvent: $newEvent) {
            code
            success
            message
            newEvent {
            id
            title
            description
            }
        }
    }

    _____

    With these code is possible to create and read data from the GraphQL server using Apollo Client in the front-end application
*/}