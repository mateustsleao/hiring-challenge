import 'module-alias/register'
import env from '@/main/config/env'
import { MongooseHelper } from '@/infra/db'

MongooseHelper.connect(env.mongoUrl, { dbName: 'notificationsDB' })
  .then(async () => {
    const { setupApp } = await import('./config/app')
    const app = await setupApp()
    app.listen(5050, () => { console.log('Server running at http://localhost:5050') })
  })
  .catch(console.error)
