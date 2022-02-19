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
    createThought({ params, body }, res) {
        Thought.create(body)
        
    },

    // Update thought
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            body,
            { new: true, runValidators: true }
        )
    },

    // Delete thought
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
    },

    // Post new reaction
    createReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body } },
            { new: true, runValidators: true }
        )
    },

    // Delete Reaction
    deleteReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: params.reactionId}},
            { new: true }
            )
    }
}

module.exports = thoughtController