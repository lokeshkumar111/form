// const express = require("express");
// const collection = require('./mongo');
// const cors = require("cors")
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// app.get("/", cors(), (req, res) => {

// })


// app.post("/sendData", async (req, res) => { 
//     const { name } = req.body;
//     try {
//         await collection.insertMany([{ name: name }])
//         const allData = await collection.find({});
//         res.status(200).json(allData);
//     } catch (e) {
//         console.log(e);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// })

// app.listen(8000, () => {
//     console.log("port connected")
// })

const express = require("express");
const collection = require('./mongo');
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "http://localhost:3001/",  // Allow requests from any origin (replace with your frontend's URL in production)
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.options("http://localhost:3001/", cors(corsOptions));

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
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

