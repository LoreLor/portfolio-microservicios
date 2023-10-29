const { Schema } = require('mongoose');

const skillSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    }
});

skillSchema.statics.list = async function(){
    return await this.find();
};

skillSchema.statics.getById = async function(id){
    return await this.findById(id);
};

skillSchema.statics.insert = async function(skill){
    return await this.create(skill);
};

skillSchema.statics.update = async function(id, skill){
    return await this.findByIdAndUpdate(id, skill, {new: true});
};

skillSchema.statics.delete = async function(id) {
    return await this.findByIdAndRemove(id);
};

module.exports = skillSchema;