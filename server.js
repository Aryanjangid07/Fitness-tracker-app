const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// MongoDB Schema
mongoose.connect('mongodb://localhost/fitness', { useNewUrlParser: true });

const EntrySchema = new mongoose.Schema({
  calories: Number,
  steps: Number,
  date: { type: Date, default: Date.now }
});

const Entry = mongoose.model('Entry', EntrySchema);

// API
app.post('/log', async (req, res) => {
  const { calories, steps } = req.body;
  const entry = new Entry({ calories, steps });
  await entry.save();
  res.send(entry);
});

app.listen(3000, () => console.log("Server started on port 3000"));
