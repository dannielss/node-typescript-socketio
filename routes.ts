import { Router } from 'express';
import User from './src/controllers/User';

const routes = Router();

routes.get('/user', User.index);

export default routes;
