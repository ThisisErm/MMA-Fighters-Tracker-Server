const mongoose = require('mongoose')

const Schema = mongoose.Schema

const fighterSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		fightingStyle: {
			type: String,
			required: true,
		},
        wins: {
            type: Number,
            required: true,    
        },
        losses: {
            type: Number,
            required: true,    
        },
        draws: {
            type: Number,
            required: true,    
        }
	},
	{
        timestamps: true
    }
)

// mongosh collection fighters
const fighter = mongoose.model('Fighter', fighterSchema)

module.exports = fighter