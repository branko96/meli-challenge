import express from "express";
import RootRouter from "./routes"
const app = express();

app.use('/api', RootRouter);

const PORT = process.env.PORT || 8082;

// start the Express server
app.listen(PORT, () => {
    // console.log( `server started at http://localhost:${ port }` );
});
