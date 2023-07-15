import { MongoMemoryServer } from 'mongodb-memory-server'

export const mockMongo = async (): Promise<MongoMemoryServer> => await MongoMemoryServer.create()
