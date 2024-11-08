import z from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createGoalCompletion } from '../../functions/create-goal-completion'
import { authenticateFromGithubCode } from '../../functions/authenticate-from-github-code'
import { GetUser } from '../../functions/get-user'

export const getProfileRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/profile',
    {
      schema: {
        tags: ['auth'],
        operationId: 'getProfile',
        description: 'Get authenticate user profile',
        response: {
          200: z.object({
            profile: z.object({
              id: z.string(),
              name: z.string().nullable(),
              email: z.string().nullable(),
              avatarUrl: z.string().url(),
            }),
          }),
        },
      },
    },
    async (request, reply) => {
      const userId = request.user.sub

      const { user } = await GetUser({
        userId,
      })

      return reply.status(200).send({ profile: user })
    }
  )
}
