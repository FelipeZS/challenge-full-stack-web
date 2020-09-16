import express from 'express';
import UsersController from './controllers/UsersControllers';

const routes = express.Router();
const usersController = new UsersController();

routes.get('/users', usersController.index);

routes.post('/users', usersController.create);

routes.put('/users/:ra', usersController.update);

routes.delete('/users/:ra', usersController.delete);


export default routes;