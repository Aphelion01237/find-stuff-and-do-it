const connection = require('./../config/connection');

module.exports = {
addComment: (req, res) =>  {
    const { eventId } = req.params;
    const { comment } = req.body;
    const query = `INSERT INTO comments (comment, event_id) VALUES(?,?);`
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