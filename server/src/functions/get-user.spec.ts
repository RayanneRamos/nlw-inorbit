import { describe, it, expect, beforeEach } from 'vitest'
import { users } from '../db/schema'
import { db } from '../db'
import { GetUser } from './get-user'
import { eq } from 'drizzle-orm'

describe('get user', () => {
  beforeEach(async () => {
    await db.delete(users).where(eq(users.id, 'john-doe'))
  })

  it('should be able to get a user', async () => {
    await db.insert(users).values({
      id: 'john-doe',
      avatarUrl: 'https://github.com/RayanneRamos.png',
      externalAccountId: 12381273,
    })

    const result = await GetUser({
      userId: 'john-doe',
    })

    expect(result).toEqual({
      user: {
        id: 'john-doe',
        name: null,
        email: null,
        avatarUrl: 'https://github.com/RayanneRamos.png',
      },
    })
  })
})
