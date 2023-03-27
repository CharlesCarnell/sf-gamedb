

import NextAuth from 'next-auth';

import { authOptions } from '../../../server/models';

export default NextAuth({
  ...authOptions,
});