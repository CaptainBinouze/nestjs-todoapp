const bcrypt = require('bcrypt');
import * as mongoose from 'mongoose'


export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: [5, 'TEXT_IS_TOO_SHORT'],
        maxlength: [255, 'TEXT_IS_TOO_LONG'],
        required: [true, 'TEXT_IS_BLANK']
    },
    email: {
        type: String,
        minlength: [5, 'TEXT_IS_TOO_SHORT'],
        maxlength: [255, 'TEXT_IS_TOO_LONG'],
        required: [true, 'TEXT_IS_BLANK']
    },
    password_hash: {
        type: String,
        required: [true, 'CHECKED_IS_BLANK']
    }
}, {
    versionKey: false,
    timestamps: true
})