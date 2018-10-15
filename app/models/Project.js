let mongoose = require('mongoose');

let projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    type: String,
    deadline: Date, 
    budget: Number
});

module.exports = mongoose.model('Project', projectSchema);
