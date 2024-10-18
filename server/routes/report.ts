import { Hono } from 'hono';
import { prisma } from '../db';

export const ReportRoute = new Hono()
  .post('/:id', async (c) => {
    const jobId = c.req.param('id');
    const data = await c.req.json();
    const report = await prisma.report.create({
      data: {
        jobId,
        ...data,
      },
    });
    return c.json(report);
  })
  .delete('/:id', async (c) => {
    const id = c.req.param('id');
    const report = await prisma.report.delete({
      where: { id },
    });
    return c.json(report);
  });
