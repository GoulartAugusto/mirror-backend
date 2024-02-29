const resolvers = {
    Query: {
        events: (_, __, { dataSources }) => {
            return dataSources.eventAPI.getAllEvents()
        },
        event: (_, { id }, { dataSources }) => {
            return dataSources.eventAPI.getEvent(id)
        }
    },
    Mutation: {
        // create a new Event for the browse
        submitNewEvent: (_, { newEvent }, { dataSources }) => {
            const createEvent = dataSources.eventAPI.createNewEvent(newEvent)
            return { code: 200, success: true, message: 'success', newEvent: createEvent }
        }
    },
    Event: {
        _resolveReference: ({ id }, { dataSources }) => {
            return dataSources.eventAPI.getEvent(id)
        }
    }
}

module.exports = resolvers;

// now test the mutation