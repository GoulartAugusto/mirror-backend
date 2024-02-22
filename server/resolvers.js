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
        createNewEvent: async (_, { id }, { dataSources }) => {
            try {
                const event = await dataSources.eventAPI.createNewEvent(id)
                return {
                    code: 200,
                    success: true,
                    message: `Successfully created a new Event to be displayed on the homepage with id ${id}`,
                    event
                }
            } catch (error) {
                return {
                    code: error.extensions.respose.status,
                    success: false,
                    message: error.extensions.response.body,
                    event: null
                }
            }
        }
    },
    Event: {
        _resolveReference: ({ id }, { dataSources }) => {
            return dataSources.eventAPI.getEvent(id)
        }
    }
}

module.exports = resolvers;
