import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { JobRoute } from './routes/job-route';
import { UserRoute } from './routes/user-route';

export const app = new Hono();
// middlewares
app.use('*', logger());
app.use(
  '*',
  cors({
    origin: (origin) => origin,
    allowHeaders: ['Content-Type'],
    credentials: true,
  }),
);
// routes
const apiRoutes = app
  .basePath('/api')
  .route('/user', UserRoute)
  .route('/jobs', JobRoute);

export type ApiRoutes = typeof apiRoutes;
