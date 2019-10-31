var express = require('express');
var router = express.Router();//add constant to require mysql database
const mysql = require('mysql');
//add code to connect to mySQL database
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password1!',
  database: 'sakila'
});
connection.connect(function(err) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Yay! You are connected to the database!');
})
/* GET home page. */
router.get('/actor/:id', function(req, res, next) {
//variable created for actorId that is set to the id specified within the URL using req.params.id; parseInt is used so it is read as a number and not a string
  let actorId = parseInt(req.params.id);
//console.log added to ensure req.params.id is working properly
  console.log(actorId);
//add idQuery set to the SQL query statement needed
  let idQuery = `SELECT * FROM actor WHERE actor_id=${actorId}`;
  console.log(idQuery);
//add SQL method for running the idQuery variable
connection.query(idQuery, (err, result) => {
  console.log(result);
//set up to be able to render the information from the object in the database onto the page
  if (result.length > 0) {
    res.render('index', {
      actor: result[0]
    });
   } else {
    res.send('not a valid id');
   }
  });
});
module.exports = router;
