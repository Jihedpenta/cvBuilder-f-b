const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    console.log('authHeader :: ', authHeader);
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
    const token = authHeader.split(' ')[1];
    console.log('token -- ',token)
    jwt.verify(
        token,
        // process.env.ACCESS_TOKEN_SECRET,
        process.env.ACCESS_TOKEN_SECRET,

        (err, decoded) => {
            console.log('errrrrrr :: ', err);
            if (err) return res.sendStatus(403); //invalid token
            req.email = decoded.UserInfo.email;
            req.roles = decoded.UserInfo.roles;
            console.log('decoded.UserInfo.roles :: ', decoded.UserInfo.roles);
            next();
        }
    );
}

module.exports = verifyJWT