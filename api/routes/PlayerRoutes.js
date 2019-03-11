'use strict';
module.exports = function(app) {
    const player = require('../controllers/PlayerController');

    // Player Routes
    app.route('/players')
        .get(player.list_all_players)
        .post(player.create_a_player);
    app.route('/players/:playerId')
        .get(player.get_a_player)
        .put(player.update_a_player)
        .delete(player.delete_a_player);
};

