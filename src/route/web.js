import express from 'express'

let router = express.Router();

const initWebRoutes = (app) => { 
    router.get('/', (req, res) => {
        res.render('uploadFile.ejs');
    })

    return app.use('/', router)
} 

// export default initWebRoutes;
module.exports = initWebRoutes;