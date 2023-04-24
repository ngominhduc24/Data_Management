import express from 'express'
import Controller from '../controller/Controller'

let router = express.Router();

const initWebRoutes = (app) => { 
    router.get('/', Controller.getHomePage);

    router.post('/', Controller.createNewUser);
    
    router.get('/details/user/:userId', Controller.DetailsUser);

    router.get('/edit/user/:userId', Controller.GetEditUser);

    router.post('/edit/user/:userId', Controller.UpdateUser);

    router.post('/delete-user', Controller.DeleteUser);

    return app.use('/', router);
} 

// export default initWebRoutes;
module.exports = initWebRoutes;