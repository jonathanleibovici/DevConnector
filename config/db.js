//this is where we are doing the mongodb connection
const mongoose = require("mongoose"); //this is how you connect to mongoose
const config = require("config"); //grab the string we just added in default.json
const db = config.get("mongoURI"); //to the the mongouri//gets that value

const connectdb = async () => {
	try {
		//t0 connect to mongoose we can do
		await mongoose.connect(db); //this will give us a promis?
		//since this returns a promis we want to put an await here?
		console.log("mongo db connected");
	} catch (err) {
		console.error(err.message);
		//exit process with failure
		process.exit(1);
	}
}; //last thing we want to export this ?

module.exports = connectdb;
