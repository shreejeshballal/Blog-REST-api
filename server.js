import routes from "./routes/index.js"
import express from 'express';
import "dotenv/config"

const app = express();


const PORT = process.env.PORT || 3000;


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    return res.send("Hello World");
})


// * Routes file   
app.use(routes);



app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})
