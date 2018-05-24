const db = require('.././db/config'),
      Dog = {};


//Find all dogs
Dog.find = () => {
  return db.query(`SELECT * FROM dogs`)
};
//Find dog by id
Dog.findById = (dogId) => {
  let { id } = dogId;
  debugger;
  return db.one(`SELECT *
    FROM dogs
    WHERE doggie_id=$1`, id)
};
//Create a dog
Dog.save = (dogData) => {
  const {doggie_username, owner_name, age, weight} = dogData;
  return db.one(`INSERT INTO dogs
    (doggie_username, owner_name, age, weight)
      VALUES($1,$2,$3,$4)
      RETURNING *`, [doggie_username, owner_name, age, weight])
}

// Update a dog
Dog.findByIdAndUpdate = (dogId, dogData) => {
  const {doggie_username, owner_name, age, weight} = dogData,
        {id} = dogId;

  return db.one(`UPDATE dogs
    SET doggie_username=$1, owner_name=$2, age=$3, weight=$4
    WHERE doggie_id=$5 RETURNING *`, [doggie_username, owner_name, age, weight, id])
}

//Delete a dog
Dog.findByIdAndRemove = (dogId) => {
  const {id} = dogId;
  return db.one(
    `DELETE FROM dogs WHERE doggie_id=$1 RETURNING *`,id
  )
}
//Find all tricks for a single dog by id
Dog.findAllTricks = (dogId) => {
  const {id} = dogId;
  return db.query(
      `SELECT * FROM tricks
      WHERE doggie_id=${id}`);
}
//Create a trick for a dog by id
Dog.addTrick = (dogId, trickData) => {
  const {id} = dogId,
  {tricks_name} = trickData;
  return db.one(`INSERT INTO tricks(doggie_id, tricks_name) VALUES($1,$2) RETURNING *`, [id, tricks_name])
};
//update the dog by id in the front end
// Dog.update = (dogId, dogData) => {
//   const { id } = parseInt(dogId);
//   debugger;
//   const { dogName, dogOwner, dogAge } = dogData;
//   return db.one(`UPDATE dogs SET doggie_username=$1, owner_name=$2, age=$3 WHERE doggie_id=$4 RETURNING *`,
//     [dogName, dogOwner, dogAge, id])
// }
//Get a single trick
Dog.findOneTrick = (paramsData) => {
  const { dogid, trickid } = paramsData;
  return db.one(`SELECT *
    FROM tricks
    WHERE trick_id=$1 AND doggie_id=$2`, [trickid, dogid])
};

Dog.findOneTrickAndUpdate = (paramsData, trickData) => {
  const { dogid, trickid } = paramsData,
    { tricks_name } =trickData;
    return db.one(`UPDATE tricks
      SET tricks_name=$1
      WHERE trick_id=$2 AND doggie_id=$3
      RETURNING *`,
      [tricks_name, trickid, dogid])
};

Dog.findTrickByIdAndRemove = (paramsData) => {
  const { dogid, trickid } = paramsData;
  return db.one(`DELETE FROM tricks
    WHERE trick_id=$1
    AND doggie_id=$2 RETURNING *`, [trickid, dogid]);
}

module.exports = Dog;
