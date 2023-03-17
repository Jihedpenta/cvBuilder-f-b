const User = require("../model/User");
const jwt = require("jsonwebtoken");

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;

  const foundUser = await User.findOne({ refreshToken }).exec();
  if (!foundUser){ return res.sendStatus(403); }//Forbidden
 
  // new version
  const newRefreshTokenArray = foundUser.refreshToken.filter(
    (rt) => rt !== refreshToken
  );
  // evaluate jwt
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) {
        foundUser.refreshToken = [...newRefreshTokenArray];
        const result = await foundUser.save();
      }
      if (err || foundUser.email !== decoded.email) return res.sendStatus(403);

      // Refresh token was still valid
      const roles = Object.values(foundUser.roles);
      const accessToken = jwt.sign(
        {
          UserInfo: {
            name: foundUser.name,
            email: foundUser.email,
            roles: roles,
            id: foundUser._id,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1d" }
      );

      const newRefreshToken = jwt.sign(
        { email: foundUser.email, name: foundUser.name },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "1d" }
      );

      foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
      const result = await foundUser.save();

      // Creates Secure Cookie with refresh token
      res.cookie("jwt", newRefreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 24 * 60 * 60 * 1000,
      });

      res.json({ roles, accessToken, newRefreshToken });
    }
  );
};

module.exports = { handleRefreshToken };
