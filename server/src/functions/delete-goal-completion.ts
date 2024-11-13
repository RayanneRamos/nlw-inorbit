import { eq } from 'drizzle-orm'
import { db } from '../db'
import { goalCompletions } from '../db/schema'

interface DeleteGoalCompletionRequest {
  completionId: string
}

export async function deleteGoalCompletion({
  completionId,
}: DeleteGoalCompletionRequest) {
  const result = await db
    .delete(goalCompletions)
    .where(eq(goalCompletions.id, completionId))
    .returning()

  const completion = result[0]

  return {
    completion,
  }
}
