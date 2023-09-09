import { Router } from 'express';
import { newTask, task, getTaskId, deleteIdTask, updateTask } from '../controllers/task';
import multer from '../libs/multer';

const router = Router();
// routes 
router
    .post('/newTask', multer.single('file'), newTask) // function that it will push new task to my database and save my images

    .get('/task', task) // get all my task
    .get('/task/:id', getTaskId)

    .delete('/d_task/:id', deleteIdTask)
    .put('/u_task/:id', updateTask)
export default router;