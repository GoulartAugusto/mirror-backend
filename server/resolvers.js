const resolvers = {
    Query: {
        events: (_, __, { dataSources }) => {
            return dataSources.eventAPI.getAllEvents()
        },
        event: (_, { id }, { dataSources }) => {
            return dataSources.eventAPI.getEvent(id)
        }
    },
    Event: {
        _resolveReference: ({ id }, { dataSources }) => {
            return dataSources.eventAPI.getEvent(id)
        }
    }
}

module.exports = resolvers;
