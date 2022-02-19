const { User, Thought } = require('../models');

// TO DO:
//      Finish these functions
//      Finish functions for thought controller
//      Troubleshooting
//      Test Routes
//      Delete user thoughts on user deletion?
//             Cascade?
//      Readme
//      Video
//      Submit

const userController = {
    // Gets all users
    getAllUsers(req, res) {
        User.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // Get one user with their id
 
    }
}

module.exports = userController;