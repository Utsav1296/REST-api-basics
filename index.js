import express from "express";
import bodyParser from "body-parser";
import usersRoute from "./routes/users.js";


const app = express();
const PORT = 9000;

app.use(bodyParser.json());

app.use('/users', usersRoute)


app.get('/', (req, res) => {
   res.send('hello from index file')
})

app.listen(PORT, () => console.log(`running on : http://localhost:${PORT}`))