import express from 'express'
import Controller from '../controller/Controller'

let router = express.Router();

const initWebRoutes = (app) => { 
    router.get('/', Controller.getHomePage)

    // router.post('/details/user/:userId', Controller.DetailsUser)

    return app.use('/', router)
} 

// export default initWebRoutes;
module.exports = initWebRoutes;