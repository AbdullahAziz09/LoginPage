

const employees = [
    { username: 'abdullah', password: '123' },
    { username: 'fahad', password: 'mypass' },
    { username: 'ali', password: 'pass' }
  ];
  
  const login = (req, res) => {
    const { username, password } = req.body;
    const user = employees.find(emp => emp.username === username && emp.password === password);
  
    if (user) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  };
  
  module.exports = {
    login
  };
  