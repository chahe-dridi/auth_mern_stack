const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/employee', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/login', (req, res) => {
  EmployeeModel.findOne({ email: req.body.email, password: req.body.password })
    .then((employee) => {
      if (employee) {
        res.json({ success: true, employee });
      } else {
        res.status(400).json({ success: false, message: 'Invalid credentials' });
      }
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Invalid credentials' }));
});

app.post('/register', (req, res) => {
  EmployeeModel.create(req.body)
    .then((employee) => res.json(employee))
    .catch((err) => res.status(400).json(err));
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
