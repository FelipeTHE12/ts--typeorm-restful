import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res, next) => {
  return res.json({ hello: 'Hello' });
});

export default routes;
