const options = {
  query: (e) => {
    console.log(e.query);
  }
}

const pgp = require('pg-promise')(options);
// const db = pgp('postgres://localhost:5432/doggo2');
const db = pgp(process.env.DATABASE_URL || 'postgres://localhost:5432/doggo2');

module.exports = db;
