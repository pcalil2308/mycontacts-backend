const moongose = require('mongoose')


const userSchema = moongose.Schema({
    username: {
        type: String,
        required: [true, "Please add the user name"],
    },

    email: {
        type: String,
        required: [true, "Please add the user email address"],
        unique: [true, "Email address already taken"],
    },

    password: {
        type: String,
        required: [true, "Please add the user password"],
    },
}, {
    timestamps: true,   
   }
);

module.exports = moongose.model("User", userSchema);