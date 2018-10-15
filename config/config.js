// Setup for development and production environments
//if development, application runs on localhost, can be accessed on LAN
//if production, application runs on specified AWS instance
var config = {
    "development": {
        port: 3000,
        db: 'mongodb://127.0.0.1:27017/freelance-marketplace',
        host: '0.0.0.0'
    }
    // ,"production": {
    //     port: 3000,
    //     db: 'mongodb://newtreeviewuser:newtreeviewpass@ec2-18-191-252-51.us-east-2.compute.amazonaws.com:27017/freelance-marketplace',
    //     host: 'ec2-18-191-252-51.us-east-2.compute.amazonaws.com'
    // }
};

//export this configuration
module.exports = config;