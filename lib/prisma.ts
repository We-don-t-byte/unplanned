// import { PrismaClient } from '@prisma/client/edge' // using edge version so it can use the proxy on vercel serverless
import { PrismaClient } from '@prisma/client' // using edge version so it can use the proxy on vercel serverless

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') global.prisma = prisma