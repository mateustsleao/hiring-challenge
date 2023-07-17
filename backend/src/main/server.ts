import 'module-alias/register'
import env from '@/main/config/env'
// import { MongooseHelper } from '@/infra/db'
import mongoose from 'mongoose'

mongoose.connect(env.mongoUrl)
  .then(async () => {
    const { setupApp } = await import('@/main/config/app')
    const app = await setupApp()
    app.listen(env.port, () => { console.log(`Server running at http://localhost:${env.port}`) })
  })
  .catch(console.error)
