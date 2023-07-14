import mongoose, { type Document, Schema } from 'mongoose'
import { type AddTicketRepositoryParams } from '@/data/protocols/db/ticket'

interface TicketDocument extends AddTicketRepositoryParams, Document { }

const TicketSchema = new Schema<TicketDocument>(
  {
    client: {
      type: String,
      required: true
    },
    issue: {
      type: String,
      required: true
    },

    status: {
      type: String,
      required: true
    },
    deadline: {
      type: Date,
      required: true
    }
  },
  { timestamps: true }
)

export const TicketMongooseModel = mongoose.model<TicketDocument>('Ticket', TicketSchema)
