const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const { sequelize } = require('./database/model'); // Import sequelize instance
const app = express();

app.use(bodyParser.json());

app.use('/api', routes);

const port = 3000;

// Sync models with the database
sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Database sync error:', error);
  });
