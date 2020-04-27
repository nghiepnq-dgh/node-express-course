const express = require('express');
const app = express();

const mockUserData = [{name: 'Make'}, {name: 'Yeb'}];

app.get('/users', function(req, res) {
  res.json({success: true, message: 'Success get user', users: mockUserData});
});

app.listen(8000, function() {
  console.log('server is running');
});
