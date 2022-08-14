const express = require('express');
require('dotenv').config();

const communityRoutes = require('./routes/communityRoutes');
const unitRoutes = require('./routes/unitRoutes');
const workorderRoutes = require('./routes/workorderRoutes');
const app = express();
const cors = require('cors');

app.use(cors());

const PORT = process.env.PORT || 3010;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('welcome to AMG API Server.');
});
app.use('/api/unit', unitRoutes);
app.use('/api/workorder', workorderRoutes);
app.use('/api/community', communityRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}...`);
});
