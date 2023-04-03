// import express from 'express'
// import configviewEngine from './configs/viewEngine.js'
// import initWebRoutes from './route/web.js'

// require('dotenv').config();

// let morgan = require('morgan');
// const app = express()
// const port = process.env.PORT || 3000

// app.use(morgan('combined'));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // config view engine
// configviewEngine(app);

// // init all web routes
// initWebRoutes(app);

// // handle 404 not found
// app.use((req, res) => {
//   res.send('404.ejs');
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

















import express from 'express'
import configbiewEngine from './configs/viewEngine.js'
import initWebRoutes from './route/web.js'

require('dotenv').config()
let morgan = require('morgan')

const app = express();
const port = process.env.PORT || 3000
 
app.use(morgan('combined'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// config view engine
configbiewEngine(app);

// init all web routes
initWebRoutes(app);


// handle 404 not found
app.use((req, res) => { 
  res.send('404.ejs');
})

app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`);
})