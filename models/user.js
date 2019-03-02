var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    // Não preciso de adicionar o user e pass pq o passport já passa isso

    // username: String
    // password: String
    image: String
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('user', UserSchema);

module.exports = User;