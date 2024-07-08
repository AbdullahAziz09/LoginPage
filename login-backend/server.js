/* server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const employees = [
  { username: 'abdullah', password: '123' },
  { username: 'fahad', password: 'mypass' },
  { username: 'ali', password: 'pass' }
];

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = employees.find(emp => emp.username === username && emp.password === password);

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
*/