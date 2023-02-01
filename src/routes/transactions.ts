import { FastifyInstance } from 'fastify'
import { knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const transactions = await knex('transactions')
      .where('amount', 1000)
      .select('*')

    return transactions
  })
}
