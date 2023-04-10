import express from 'express'
import configviewEngine from './configs/viewEngine'
import initWebRoutes from './route/web'
import {connectToDb} from './configs/connectDB'

require('dotenv').config();

let morgan = require('morgan');
const app = express()
const port = process.env.PORT || 3000

app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// config view engine
configviewEngine(app);

// connect to db
connectToDb();
// init all web routes
// initWebRoutes(app);

// handle 404 not found
app.use((req, res) => {
  res.send('404.ejs');
});

app.listen(port, () => {
  console.log(`app run in : http://localhost:${port}/`)
})