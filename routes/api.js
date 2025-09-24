var express = require('express');
var router = express.Router();

// GET request
router.get('/get-record', function(req, res, next) {
  const name = "Willy Lin";
  const org = "Cisco";
  console.log(`Name: ${name}`)
  console.log(`Org: ${org}`)
  res.send('Got record!');
});

// POST request
router.post("/add-record", function(req, res, next) {
  const body = req.body;
  const name = body.name;
  const org = body.org;
  console.log(`Name: ${name}`)
  console.log(`Org: ${org}`)
  res.send('Added record!');
})

// PATCH request
router.patch("/update-record", function(req, res, next) {
  const body = req.body;
  const id = body.id;
  const name = body.name;
  const org = body.org;
  console.log(`ID: ${id}`)
  console.log(`Name: ${name}`)
  console.log(`Org: ${org}`)
  res.send('Updated record!');
})

// DELETE request
router.delete("/delete-record", function(req, res, next) {
  const body = req.body;
  const id = body.id;
  console.log(`ID: ${id}`)
  res.send('Deleted record!');
})

module.exports = router;
