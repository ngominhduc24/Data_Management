import express from 'express'
import Controller from '../controller/Controller'

let router = express.Router();

const initWebRoutes = (app) => { 
    router.get('/', Controller.getHomePage);

    router.post('/', Controller.createNewUser);
    
    router.get('/details/user/:userId', Controller.DetailsUser);

    router.post('/delete-user', Controller.deleteUser);

    router.get('/update-user/:userId', Controller.getUpdateUser);

    router.post('/update-user', Controller.updateUser);

    return app.use('/', router);
} 

// export default initWebRoutes;
module.exports = initWebRoutes;