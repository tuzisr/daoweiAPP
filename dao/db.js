//引入mongoose模块
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/friend');

var connection = mongoose.connection;
connection.on('error', function (err) {
    console.error(err);
});
connection.on('open',function () {
    console.log('we are connected!');
});

var UserSchema = new mongoose.Schema({
    userName: String,
    password: String
});

var UserModel = mongoose.model('user', UserSchema);


function getUser(userName, callback) {
    UserModel.findOne({userName: userName}, function (err, doc) {
        if(err){
            console.error(err);
            callback(err);
        }else{
            console.log(doc);
            callback(null, doc);
        }
    });
}
exports.getUser = getUser;


function addUser(userInfo, callback) {
    UserModel.create(userInfo, function (err, doc) {
        callback(err);
    });
}
exports.addUser = addUser;



