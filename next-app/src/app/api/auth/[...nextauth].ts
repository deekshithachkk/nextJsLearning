
import NextAuth from 'next-auth';
import { NextApiRequest } from 'next-auth/internals/utils';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: Record<string, string>, req: NextApiRequest) {
        const user = { id: 1, name: 'example' };
        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    } as any), // Use 'as any' if there's a type error
    // Add other providers as needed
  ],
  // Add other global options here
});
