const db = require('.././db/config');
const Trick = {}; //attaching an object to attach all query objects too

Trick.findAll = () => {
  return db.query(`
    SELECT * FROM tricks
    JOIN dogs
    ON tricks.doggie_id=dogs.doggie_id`);
}

module.exports = Trick;
