const connection = require('./../config/connection');

module.exports = {
        checkUser: (req, res) => {
        const { usernameInput } = req.params;
        const { passwordInput } = req.params;
        const query = `SELECT * FROM users WHERE ?`;
        connection.query(query, {username: usernameInput, password: passwordInput}, (err, events) => {
            if(err) {
                return res.status(404).send(err);
            }
            res.json(userInfo);
        });
    },
        createUser: (req, res) => {


    }

}