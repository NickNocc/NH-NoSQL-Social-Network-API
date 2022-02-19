const { User, Thought } = require('../models');

const thoughtController = {

    // Gets all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
    },

    // Get thought by id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
    },

    // Post new thought
    // Add Comment
    addThought({ params, body }, res) {
        Thought.create(body)
        
    },

    // Update thought
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            body,
            { new: true, runValidators: true }
        )
    }
}

module.exports = thoughtController