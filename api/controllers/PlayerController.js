'use strict';

const mongoose = require('mongoose'),
    Player = mongoose.model('Player');

exports.list_all_players = (req, res) => {
    Player.find({}, (err, player) => {
        if(err) {
            res.send(err);
        }
        res.json(player);
    });
};

exports.create_a_player = (req, res) => {
    const new_player = new Player(req.body);
    new_player.save((err, player) => {
       if(err) {
           res.send(err);
       }
       res.json(player);
    });
};

exports.get_a_player = (req, res) => {
    Player.findById(req.params.playerId, (err, player) => {
        if (err) {
            res.send(err);
        }
        res.json(player);
    });
};

exports.update_a_player = (req, res) => {
    Player.findOneAndUpdate({_id: req.params.playerId}, req.body, {new: true}, (err, player) => {
        if(err) {
            res.send(err);
        }
        res.json(player);
    });
};

exports.delete_a_player = (req, res) => {
    Player.remove({
        _id: req.params.playerId
    }, (err, task) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Player successfully deleted'});
    });
};
