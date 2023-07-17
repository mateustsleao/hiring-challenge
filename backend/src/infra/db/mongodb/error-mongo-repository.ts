import { type LogErrorRepository } from '@/data/protocols/db/log'
import { LogErrorMongooseRepository } from '@/infra/db/mongoose'

export class LogErrorMongoRepository implements LogErrorRepository {
  async logError (stack: string): Promise<void> {
    const ErrorModel = new LogErrorMongooseRepository({ stack })
    await ErrorModel.save()
  }
}
