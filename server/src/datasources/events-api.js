const { RESTDataSource } = require('@apollo/datasource-rest');
const { events } = require('./events_data.json')

class EventAPI extends RESTDataSource {
    getAllEvents() {
        return events
    }

    getEvent() {
        return events.find(e => e.id === id)
    }
}

module.exports = EventAPI;