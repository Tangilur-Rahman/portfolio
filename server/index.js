const express = require("express");
require("dotenv").config();
const model = require("./model/model");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/user", async (req, res) => {
	const { name, email, message } = req.body;

   

	try {

		if(name && email){
			const document = await model({ name, email, message });

		await document.save();

		res.status(200).json({ "message": "Sended Successfully 💚" });
		}else{
			res.status(500).json({ "error": "Fill-Up Properly 🙏" });
		}
		
	} catch (error) {
		
		res.status(500).json({ "error": "Invalid Email! 👽"});
	}
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`server was running at http://localhost:${PORT}`);
});
