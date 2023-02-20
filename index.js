const express = require('express');
const {taskRoutes} = require('./src/routes/taskRoutes');
const app = express();
const PORT = 8000;

app.use(express.json());

app.use('/todos',taskRoutes);

app.listen(PORT, () => {
    console.log('listening on port');
});