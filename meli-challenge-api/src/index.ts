import express from "express";
import cors from "cors";
import RootRouter from "./routes"
const app = express();

app.use(cors());
app.use('/api', RootRouter);

const PORT = process.env.PORT || 8082;

// start the Express server
app.listen(PORT, () => {
    // console.log( `server started at http://localhost:${ port }` );
});
