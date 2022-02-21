const { Schema, model } = require('mongoose');
const formatDate = require('../utils/formatDate');


const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },

        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },

        username: {
            type: String,
            ref: 'User',
            required: true
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => formatDate(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => formatDate(createdAtVal)
        },

        username: {
            type: String,
            ref: 'User',
            required: true
        },

        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;