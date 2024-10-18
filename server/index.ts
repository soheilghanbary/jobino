import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { JobRoute } from './routes/job';
import { UserRoute } from './routes/user';
import { ReportRoute } from './routes/report';

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
  .route('/jobs', JobRoute)
  .route('/reports', ReportRoute);

export type ApiRoutes = typeof apiRoutes;
