const express = require("express");
const collection = require('./mongo');
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {

})


app.post("/sendData", async (req, res) => { 
    const { name } = req.body;
    try {
        await collection.insertMany([{ name: name }])
        const allData = await collection.find({});
        res.status(200).json(allData);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Internal Server Error" });
    }
})

app.listen(8000, () => {
    console.log("port connected")
})
