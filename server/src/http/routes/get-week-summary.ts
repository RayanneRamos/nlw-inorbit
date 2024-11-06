import z from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getWeekPendingGoals } from '../../functions/get-week-pending-goals'
import { getWeekSummary } from '../../functions/get-week-summary'
import { authenticateUserHook } from '../hooks/authenticate-user'
import dayjs from 'dayjs'

export const getWeekSummaryRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/summary',
    {
      onRequest: [authenticateUserHook],
      schema: {
        tags: ['goals'],
        description: 'Get week summary',
        querystring: z.object({
          weekStartAt: z.coerce
            .date()
            .optional()
            .default(dayjs().startOf('week').toDate()),
        }),
        response: {
          200: z.object({
            summary: z.object({
              completed: z.number(),
              total: z.number(),
              goalsPerDay: z.record(
                z.string(),
                z.array(
                  z.object({
                    id: z.string(),
                    title: z.string(),
                    completedAt: z.string(),
                  })
                )
              ),
            }),
          }),
        },
      },
    },
    async request => {
      const userId = request.user.sub
      const { weekStartAt } = request.query
      const { summary } = await getWeekSummary({ userId, weekStartAt })

      return { summary }
    }
  )
}
