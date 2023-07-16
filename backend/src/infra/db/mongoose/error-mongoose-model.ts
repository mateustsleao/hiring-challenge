import mongoose, { type Document, Schema } from 'mongoose'

interface LogErrorDocument extends Document {
  stack: string
  timestamp: Date
}

const ErrorLogSchema: Schema = new Schema<LogErrorDocument>({
  stack: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
})

export const LogErrorMongooseRepository = mongoose.model<LogErrorDocument>('LogError', ErrorLogSchema)
