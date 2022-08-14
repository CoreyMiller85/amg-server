const express = require('express');
const communityRoutes = require('./routes/communityRoutes');
const unitRoutes = require('./routes/unitRoutes');
const workorderRoutes = require('./routes/workorderRoutes');
const app = express();

const PORT = process.env.PORT || 3010;

app.get('/', (req, res) => {
  res.send('welcome to AMG API Server.');
});
app.use('/api/unit', unitRoutes);
app.use('/api/community', communityRoutes);
app.use('/api/workorder', workorderRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}...`);
});
