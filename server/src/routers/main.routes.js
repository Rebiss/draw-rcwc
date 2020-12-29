const express = require('express'),
    app = express(),
    WSServer = require('express-ws')(app),
    const aWss = WSServer.getWss(),
    {postImage, getImage} =require('../controllers/main.controller');

routerRoot.ws('/', webSoket)

export default routerRoot
