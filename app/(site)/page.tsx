import { getUserBySession } from '@/server/auth';

export default async () => {
  const user = await getUserBySession();
  return (
    <>
      <h1>I'm Here!</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};
