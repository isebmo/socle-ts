'use strict';

exports.getUser = getUser;

/**
 * Bouchon data pour graph
 * @param req
 * @param res
 * @param next
 */
function getUser(req, res, next) {
    var user = {
        login: 'pierre paul',
        
    };

    /*res.status(401)
     .send({})
     .end();*/
    res.send(user);
}
