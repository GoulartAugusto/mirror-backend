//const { RESTDataSource } = require('@apollo/datasource-rest');
const { events } = require('./events_data.json')

class EventAPI {
    getAllEvents() {
        return events
    }

    getEvent(id) {
        return events.find(e => e.id === id)
    }
}

module.exports = EventAPI;