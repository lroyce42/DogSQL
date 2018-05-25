const db = require('.././db/config');
const Trick = {}; //attaching an object to attach all query objects too

Trick.findAll = () => {
  return db.query(`
    SELECT * FROM tricks
    JOIN dogs
    ON tricks.doggie_id=dogs.doggie_id`);
};

Trick.findById = (paramsData) => {
  const {id} = paramsData;
  return db.one(`SELECT * FROM tricks WHERE trick_id=$1`, id);
};

Trick.remove = (paramsData) => {
  const {id} = paramsData;
  return db.none(`DELETE FROM tricks WHERE trick_id=$1`, id);
};

module.exports = Trick;
