import * as mongoose from 'mongoose'


export const TodoSchema = new mongoose.Schema({
    text: {
        type: String,
        minlength: [5, 'TEXT_IS_TOO_SHORT'],
        maxlength: [255, 'TEXT_IS_TOO_LONG'],
        required: [true, 'TEXT_IS_BLANK']
    },
    checked: {
        type: Boolean,
        required: [true, 'CHECKED_IS_BLANK']
    }
}, {
    versionKey: false,
    timestamps: true
})