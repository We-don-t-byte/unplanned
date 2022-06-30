import { NextApiHandler } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import { prisma } from '../../../lib/prisma';

const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        }), 
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID as string,
            clientSecret: process.env.FACEBOOK_SECRET as string
        })
    ],
    pages: {
      signIn: '/auth/signIn'
    },
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
      strategy: 'jwt',
    },
    callbacks: {
    session: async ({session, token}) => {
      if (session?.user) {
        session.user.id = token.id
      }
      return session;
    },
    jwt: async ({token, user, profile}) => {
      if (user && token) {
        token["id"] = user.id;
      }
      return token;
    }
  }
};

const authHandler: NextApiHandler = (req,res) => NextAuth(req,res,options);
export default authHandler



