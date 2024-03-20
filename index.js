// Importing necessary modules and dependencies
import express, { query } from "express"; // Importing Express framework and query object
import bodyParser from "body-parser"; // Importing body-parser for parsing request bodies
import mongoose from "mongoose"; // Importing mongoose for MongoDB interaction
import cors from 'cors'; // Importing cors for enabling Cross-Origin Resource Sharing
import dotenv from 'dotenv'; // Importing dotenv for environment variables
import userRoutes from './routes/users.js'; // Importing user routes
import wikiRoutes from './routes/wiki.js'; // Importing wiki routes
import weatherRoutes from './routes/weather.js'; // Importing weather routes

dotenv.config(); // Loading environment variables from a .env file

const app = express(); // Creating an instance of the Express application

// Setting up middleware
app.use(bodyParser.json({limit:"30mb", extended: true})); // Parsing JSON requests with a body size limit of 30mb
app.use(bodyParser.urlencoded({limit:"30mb", extended:true})); // Parsing URL-encoded requests with a body size limit of 30mb
app.use(cors()); // Enabling CORS for cross-origin requests

// Setting up a basic route for testing server availability
app.get('/', (req, res) => {
    res.send('APP is running!!');
});

// Defining routes for different functionalities
app.use('/users', userRoutes); // Routes for user-related operations
app.use('/wiki', wikiRoutes); // Routes for wiki-related operations
app.use('/weather', weatherRoutes); // Routes for weather-related operations

// Setting up MongoDB connection
const CONNECTION_URL = process.env.CONNECTION_URL; // MongoDB connection URL from environment variables
const PORT = process.env.PORT; // Port to run the server on from environment variables

mongoose.set('strictQuery', false); // Setting mongoose to allow strict queries
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }) // Connecting to MongoDB
    .then(() => app.listen(PORT, () => console.log("DB Connected and Server is Running."))) // Listening for connections once connected to MongoDB
    .catch((err) => console.log(err.message)); // Handling errors if connection fails