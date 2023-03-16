const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    roles: {
        User: {
            type: Number,
            default: 2001
        },
        Admin: Number
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: [String], 
    resumes: [{ type: Schema.Types.ObjectId, ref: 'Resume' }]

});

module.exports = mongoose.model('User', userSchema);