import Router from 'express'
import {webSoket} from '../controllers/main.controller'
const routes = new Router();

routes.ws('/', webSoket)

export default routerRoot
