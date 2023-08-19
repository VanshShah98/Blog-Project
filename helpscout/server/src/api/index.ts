import { Router } from 'express';
import userRouter from './user/user.router';
import authRouter from './auth/auth.router';

export default (): Router => {
  const app = Router();
  app.use('/user', userRouter())
  app.use('/auth',authRouter())
  return app;
};
