const express = require("express");
const path = require("path");
require("dotenv").config();
const model = require("./model/model");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/user", async (req, res) => {
	const { name, email, message } = req.body;

	try {
		if (name && email) {
			const document = await model({ name, email, message });

			await document.save();

			res.status(200).json({ message: "Sended Successfully 💚" });
		} else {
			res.status(500).json({ error: "Fill-Up Properly 🙏" });
		}
	} catch (error) {
		res.status(500).json({ error: "Invalid Email! 👽" });
	}
});

// submit on heroku
if (process.env.NODE_ENV == "production") {
	app.use(express.static("build"));

	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname + "/build/index.html"));
	});
} else {
	app.get("/", (req, res) => {
		res.send("client disconnected");
	});
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log(`server was running at http://localhost:${PORT}`);
});
