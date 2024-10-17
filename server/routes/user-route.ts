import { prisma } from '@/server/db';
import { Hono } from 'hono';

export const UserRoute = new Hono().put('/:id', async (c) => {
  const id = c.req.param('id');
  const data = await c.req.json();
  const user = await prisma.user.update({
    where: { id },
    data,
  });
  return c.json({ msg: 'User Details Updated' })
});
