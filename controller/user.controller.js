const db = require('../db');
class UserController {
    async getUser(req,res) {
        const id = req.params.id;
        await db.query('SELECT * FROM lab_5 WHERE id = $1', [id]).then((data) => {
            res.send(data.rows[0])
            console.log(data.rows[0]);
        });
    }
};

module.exports = new UserController();