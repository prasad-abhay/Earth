const express = require("express")
const connectDB = require("./connectdb");
const apiRoutes = require("./routes/earthroutes");
const authRoute = require("./routes/authroutes");
const cors = require("cors");
const { configDotenv } = require("dotenv");
configDotenv();
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

app.use(express.json());

// Connect to DB
connectDB();

// app.get("/", (req, res) => {
//   res.send(`Hello world`);
// });

// using cors 
app.use(
  cors({
    origin: ["http://localhost:8080","https://earth-frontend.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, 
  })
);

// Use API routes
app.use("/api", apiRoutes);
app.use("/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
