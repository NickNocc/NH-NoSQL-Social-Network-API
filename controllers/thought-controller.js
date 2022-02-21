const res = require('express/lib/response');
const { User, Thought } = require('../models');

const thoughtController = {

    // Gets all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // Get thought by id
    
};

module.exports = thoughtController