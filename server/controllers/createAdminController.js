const User = require('../model/User');
const bcrypt = require('bcrypt');
const ROLES_LIST = require('../config/roles_list');

const handleCreateAdmin = async (req, res) => {
    const { email, pwd } = req.body;
    if (!email || !pwd) return res.status(400).json({ 'message': 'Email and password are required.' });

    // check for edisting Admin in the db
    const existingAdmin = await User.findOne({ 'roles.Admin': ROLES_LIST.Admin }).exec();
    if (existingAdmin) return res.sendStatus(409); //Conflict 

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(pwd, 10);

        //create and store the new user
        const result = await User.create({
            "email": email,
            "password": hashedPwd,
            "roles":{
                Admin: ROLES_LIST.Admin
            }
        });

        console.log(result);

        res.status(201).json({ 'success': `Admin ${email} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleCreateAdmin };