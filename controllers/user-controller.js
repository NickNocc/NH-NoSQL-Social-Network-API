const { User, Thought } = require('../models');

const userController = {
    // Gets all users
    getAllUsers(req, res) {
        User.find({})
    },
    // Get one user with their id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
    },
    // Create new user
    createUser({ body }, res) {
        User.create(body)
    },
    // Update user by id
    updateUser({ params, body }, res) {
        User.findOnAndUpdate(
            { _id: params.id },
            body,
            { new: true, runValidators: true }
        )
    },
    // Deletes user by id
    deleteUser({ params }, res) {
        User.findOnAndDelete({ _id: params.id })
    },
    // Adds friend by id
    addFriend({ params }, res) {
        User.findOnAndUpdate(
            { _id: params.userId },
            { $push: { friends: params.friendId } },
            { new: true, runValidators: true }
        )
    },
    // Deletes friend by id
    deleteFriend({ params }, res) {
        User.findOnAndDelete({ _id: params.userId })
    }
}

module.exports = userController;