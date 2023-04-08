import express from 'express'
import Controller from '../controller/Controller'

let router = express.Router();

const initWebRoutes = (app) => { 
    router.get('/', Controller.getHomePage)

    return app.use('/', router)
} 

// export default initWebRoutes;
module.exports = initWebRoutes;