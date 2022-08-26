const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const dbConnection = require('./db')
app.use(express.json())

app.use('/api/cars/' , require('./routes/carsRoute'))
app.use('/api/users/' , require('./routes/usersRoute'))
app.use('/api/bookings/' , require('./routes/bookingsRoute'))

const path = require('path')
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
  });
app.get('*', (req, res) => {
    res.send('hello world');
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
