import prisma from '@/server/db';
import { Hono } from 'hono';

export const JobRoute = new Hono()
  .get('/', async (c) => {
    const jobs = await prisma.job.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return c.json(jobs);
  })
  .get('/me', async (c) => {
    const userId = 'your user id';
    const jobs = await prisma.job.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
    return c.json(jobs);
  })
  .get('/search/:q', async (c) => {
    const q = c.req.param('q');
    const jobs = await prisma.job.findMany({
      where: {
        title: {
          contains: q,
          mode: 'insensitive',
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return c.json(jobs);
  })
  .get('/:id', async (c) => {
    const id = c.req.param('id');
    const job = await prisma.job.findUnique({
      where: { id },
    });
    return c.json(job);
  })
  .delete('/:id', async (c) => {
    const id = c.req.param('id');
    const job = await prisma.job.delete({
      where: { id },
    });
    return c.json(job);
  })
  .post('/', async (c) => {
    const data = await c.req.json();
    const job = await prisma.job.create({ data });
    return c.json(job);
  })
  .put('/:id', async (c) => {
    const id = c.req.param('id');
    const data = await c.req.json();
    const job = await prisma.job.update({
      where: { id },
      data,
    });
    return c.json(job);
  });
