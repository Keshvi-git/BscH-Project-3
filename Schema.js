const mongoose=require('mongoose');

const schema=mongoose.Schema({
	id: Number,
	name: String,
	date:Date,
    sale:Number,
    expense:Number
})

module.exports=mongoose.model('projects',schema);


