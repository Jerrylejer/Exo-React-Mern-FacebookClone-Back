const { validateEmail } = require('../helpers/validations');
const User = require('../models/User');

exports.register = async (req, res) => {
// console.log(req.body);
try {
    // déstructuration des données reçues du body
    const {
        first_name, 
        last_name, 
        email, 
        password, 
        username, 
        birthdayYear, 
        birthdayMonth, 
        birthdayDay, 
        gender
    } = req.body;

    // Si email invalide
    if(!validateEmail(email)){
        return res.status(400).json({
            message: "Invalid email adress",
        });
    }
    
    // Attente réception puis sauvegarde des données dans un nouveau user
    const user = await new User({
        first_name, 
        last_name, 
        email, 
        password, 
        username, 
        birthdayYear, 
        birthdayMonth, 
        birthdayDay, 
        gender
    }).save();
    res.json(user);
}
catch(error) {
    res.status(500).json({ message: error.message });
}
};

