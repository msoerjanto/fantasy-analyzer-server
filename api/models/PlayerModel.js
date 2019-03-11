'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    name: {
        type:String,
        required: [true, 'Player must have a name']
    },
    team: {
        type: String,
        default: 'No Team'
    },
    position: {
        type: [{
            type: String,
            enum: ['PG', 'SG', 'SF', 'PF', 'C', 'G', 'F']
        }],
        required: [true, 'Player must have a Position']
    },
    height: String,
    weight: String,
    dob: Date,
    school: String,
    Created_date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Player', PlayerSchema);
