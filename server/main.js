import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routes from './src/routers/main.routes'

const app = express(),
    env = dotenv.config(),
    port = process.env.NODE_PORT || 3022;

app.use(cors())
app.use(express.json())
app.use('/', routes)
app.listen(port, () => console.log(`Server runing... , port ${port}`));