import { Router } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionController';

const rota = Router();

rota.post('/classes', ClassesController.store);
rota.get('/classes', ClassesController.index);
rota.post('/connections', ConnectionController.store);
rota.get('/connections', ConnectionController.index);
export default rota;
