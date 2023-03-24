

import NextAuth from 'next-auth';

import { authOptions } from '../../../server/models';

export default NextAuth({
  ...authOptions,
  callbacks: {
    async session({ session, token, user }) {
      // Add the User ID to their JWT
      session.user.id = user.id;
      return session;
    }
  }
});