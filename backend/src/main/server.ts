import 'module-alias/register'
import env from '@/main/config/env'
// import { MongooseHelper } from '@/infra/db'
import mongoose from 'mongoose'

// console.log('n era pra entrar aqui', env.mongoUrl)

mongoose.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('@/main/config/app')).default
    // const { setupApp } = await import('./config/app')
    // const app = await setupApp()
    app.listen(env.port, () => { console.log(`Server running at http://localhost:${env.port}`) })
  })
  .catch(console.error)
