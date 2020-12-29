const Router = require('express'),
    {postImage, getImage} =require('../controllers/main.controller'),
    imgRouter = new Router();

imgRouter.post('/img', postImage)
imgRouter.get('/img', getImage)

export default imgRouter
