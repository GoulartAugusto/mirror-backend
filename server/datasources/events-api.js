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