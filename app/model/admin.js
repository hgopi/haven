const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SaltRounds = 10;

const Admin = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
});


Admin.pre('save', function (next) {
    const user = this;
    // only hash the password if it has been modified (or is new)    
    if (!user.isModified('password')) return next();

    bcrypt.hash(user.password, SaltRounds,
        function (err, hashedPassword) {
            if (err) {
                next(err);
            }
            else {
                user.password = hashedPassword;
                next();
            }
        });
});

Admin.methods.isCorrectPassword = function (password, callback) {
    bcrypt.compare(password, this.password, function (err, same) {
        if (err) {
            callback(err);
        } else {
            callback(null, same);
        }
    });
}

module.exports = mongoose.model('Admin', Admin, 'admin');