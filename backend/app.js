const express = require("express")
const ErrorHandler = require("./middleware/error")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
)

app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ limit: "50mb", extended: true }))
app.use(cookieParser())

app.get("/test", (req, res) => {
  res.send("Hello world!")
})

app.use("/api/v2/user", require("./controller/user"))
app.use("/api/v2/conversation", require("./controller/conversation"))
app.use("/api/v2/message", require("./controller/message"))
app.use("/api/v2/order", require("./controller/order"))
app.use("/api/v2/shop", require("./controller/shop"))
app.use("/api/v2/product", require("./controller/product"))
app.use("/api/v2/event", require("./controller/event"))
app.use("/api/v2/coupon", require("./controller/coupounCode"))
app.use("/api/v2/payment", require("./controller/payment"))
app.use("/api/v2/withdraw", require("./controller/withdraw"))

app.use(ErrorHandler)

module.exports = app
