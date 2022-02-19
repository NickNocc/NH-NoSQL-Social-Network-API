const { User, Thought } = require('../models');

const userContoller = {

    getAllUsers(req, res) {
        User.find({})
    },

    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
    },

    createUser({ body }, res) {
        User.create(body)
    },

    updateUser({ params, body }, res) {
        User.findOnAndUpdate
    }
}

module.exports = userController;