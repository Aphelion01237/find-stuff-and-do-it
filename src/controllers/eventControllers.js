const connection = require('./../config/connection');

module.exports = {
    getEvents: (req, res) => {
        const query = `SELECT * FROM events;`;
        connection.query(query, (err, events) => {
            if(err) {
                return res.status(404).send(err);
            }
            res.json(events);
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
    },
    addComment: (req, res) =>  {
        const { eventId } = req.params;
        const { comment } = req.body;
        const query = `INSERT INTO comments(comment, event_id) VALUES(?,?);`
        connection.query(query, [comment, eventId], (err, comments) => {
            if(err){
                console.log(err);
                return res.status(403).send(err);
            }            
            res.json(comments);
        });
    },
    getEventsComments: (req, res) => {
        const { eventId } = req.params;
        let query = `SELECT events.id as eventId, events.event, comments.id, comment FROM comments `;
        query += `INNER JOIN events `;
        query += `ON comments.event_id = events.id `;
        query += `WHERE event_id = ?`;
        connection.query(query, parseInt(eventId), (err, comments) => {
            if(err) {
                return res.status(403).send(err);
            }
            console.log(comments);
            res.json(comments);
        });
    }
};