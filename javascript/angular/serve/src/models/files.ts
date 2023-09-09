import { Schema, model, Document } from 'mongoose';

const schema = new Schema({
    name: String,
    title: String,
    description: String,
    file: String,
    status: Boolean,
    date: Date
})

export default model<ItaskRequi>('uploads_jimmy', schema)

interface ItaskRequi extends Document {
    name: string,
    title: string,
    description: string,
    file: string,
    status: string,
    date: Date
}
