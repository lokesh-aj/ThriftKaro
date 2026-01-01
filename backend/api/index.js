import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json())
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  })
)

// routes
import routes from "../controller/index.js"
app.use("/api", routes)

export default app
