const { Schema } = require('mongoose');

const projectSchema = new Schema ({
    _id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    stack: {
        type: String,
        require: true,
    },
    deploy:String,
    github: {
        type: String,
        require: true,
    },
    demo: String,
});

projectSchema.statics.list = async function(){
    return await this.find()
}

projectSchema.statics.get = async function(id){
    return await this.findById(id)
}

projectSchema.statics.insert = async function(project){
    return await this.create(project)
}

projectSchema.statics.update = async function(id, project){
    return await this.findByIdAndUpdate(id, project, {new:true})
}

projectSchema.statics.delete = async function(id){
    return await this.findByIdAndDelete(id);
}

module.exports = projectSchema;