const User = require('../model/User');
const bcrypt = require('bcrypt');

const getAllUsers = async (req, res) => {
    const users = await User.find();
    if (!users) return res.status(204).json({ 'message': 'No users found' });
    res.json(users);
}

const deleteUser = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ "message": 'User ID required' });
    const user = await User.findOne({ _id: req.params.id }).exec();
    if (!user) {
        return res.status(204).json({ 'message': `User ID ${req.params.id} not found` });
    }
    const result = await user.deleteOne({ _id: req.params.id });
    res.json(result);
}

const getUser = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ "message": 'User ID required' });
    const user = await User.findOne({ _id: req.params.id }).exec();
    if (!user) {
        return res.status(204).json({ 'message': `User ID ${req.params.id} not found` });
    }
    res.json(user);
}

const editUser = async (req,res)=>{
    const { email,newEmail,newPwd } = req.body;
    if (!email) return res.status(400).json({ 'message': 'email are required.' });
    try {
        const foundUser = await User.findOne({ email: email }).exec();

        if (!foundUser) {
          return res.status(404).send("User not found");
        }

        if(newEmail){
            foundUser.email = newEmail
        }
        if(newPwd){
            const hashedPwd = await bcrypt.hash(newPwd, 10);
            foundUser.pwd = hashedPwd
        }
        const result = await foundUser.save();
        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
      }
}

module.exports = {
    getAllUsers,
    deleteUser,
    getUser,
    editUser
}