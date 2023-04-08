import express from 'express'
import configviewEngine from './configs/viewEngine.js'
import initWebRoutes from './route/web.js'
import connectDB from './configs/connectDB.js'

require('dotenv').config();

let morgan = require('morgan');
const app = express()
const port = process.env.PORT || 3000

app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// config view engine
configviewEngine(app);

// connect to MongoDB
// connectDB.main;

// init all web routes
// initWebRoutes(app);

// handle 404 not found
app.use((req, res) => {
  res.send('404.ejs');
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
})