import { Hono } from 'hono';
import prisma from '../db';

export const UserRoute = new Hono().put('/:id', async (c) => {
  const id = c.req.param('id');
  const data = await c.req.json();
  const user = await prisma.user.update({
    where: { id },
    data,
  });
});
