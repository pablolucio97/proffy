import express, { response } from 'express'
import ClassesController from './src/controllers/ClassesControlers'
import ConnecitonController from './src/controllers/ConnectionsController'


const routes = express.Router()

const classesControllers = new ClassesController()
const connectionsControllers = new ConnecitonController()



routes.post('/classes', classesControllers.create)

routes.get('/classes', classesControllers.index)

routes.post('/connections', connectionsControllers.create)
routes.get('/connections', connectionsControllers.index)

  export default routes