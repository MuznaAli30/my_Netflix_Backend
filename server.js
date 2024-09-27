import express from 'express';
import authRoutes from './Routes/auth.route.js';
import movieRoutes from './Routes/movie.route.js'

import { ENV_VARS } from './Config/envVars.js';
import { connectDB } from './Config/db.js';

const app = express();
const PORT = ENV_VARS.PORT;


app.use(express.json()); //allows req.body
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/movie", movieRoutes);



app.listen(PORT, () => { 
    console.log('Server started at http://localhost:' + PORT);
    connectDB();
});

