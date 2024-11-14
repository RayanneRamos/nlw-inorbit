import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { deleteGoalCompletion } from '../../functions/delete-goal-completion'
import { authenticateUserHook } from '../hooks/authenticate-user'

export const deleteCompletionRoute: FastifyPluginAsyncZod = async app => {
  app.delete(
    '/completions',
    {
      schema: {
        tags: ['goals'],
        operationId: 'deleteCompletion',
        description: 'Delete a goal completion',
        body: z.object({
          completionId: z.string(),
        }),
        response: {
          204: z.null(),
        },
      },
    },
    async (request, reply) => {
      const { completionId } = request.body

      await deleteGoalCompletion({ completionId })

      return reply.status(204).send()
    }
  )
}
