const express = require('express'),
    dotenv =require('dotenv'),
    cors = require('cors'),
    routerRoot = require('./src/routers/main.routes'),
    imgRouter = require('./src/routers/img.routes'),
    app = express(),
    env = dotenv.config(),
    port = process.env.NODE_PORT || 3022;

app.use(cors())
app.use(express.json())
app.use('/', routerRoot)
app.use('/img', imgRouter)
app.listen(port, () => console.log(`Server runing... , port ${port}`));