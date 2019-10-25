const connection = require('./../config/connection');

module.exports = {
    getEvents: (req, res) => {
        const query = `SELECT * FROM events;`;
        connection.query(query, (err, events) => {
            if(err) {
                return res.status(404).send(err);
            }
            res.json(events);
            console.log(events);
        });
    },
    createEvent: (req, res) => {
        const { event } = req.body;
        const query = `INSERT INTO events (event) VALUES(?)`;            
        connection.query(query, event, (err, response) => {
            if(err) {
                return res.status(403).send(err);
            }
            res.send(response); 
        });
    },
    getEvent: (req, res) => {
        const { eventId } = req.params;
        const query = `SELECT * FROM events WHERE ?`;
        connection.query(query, {id: eventId}, (err, events) => {
            if(err) {
                return res.status(404).send(err);
            }
            const event = events[0];
            res.json(event);
        });
    },
    deleteEvents: (req, res) => {
        const { eventId } = req.params;
        const query = `DELETE FROM events WHERE ?`;
        connection.query(query, { id: eventId }, (err, result) => {
            if(err) {
                return res.status(404).send(err);
            }
            res.json(result);
        });
    }
};