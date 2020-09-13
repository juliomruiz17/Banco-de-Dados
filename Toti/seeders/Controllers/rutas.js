import { Router } from 'express';
import TasksController from './Controllers/TasksController';
const routes = Router();

app.get('/tasks', TasksController.index)
app.get('/tasks/:id', TasksController.show)
app.post('/tasks', TasksController.store)
app.put('/tasks/:id', TasksController.update)
app.delete('/tasks/:id', TasksController.delete)



 
export default routes;