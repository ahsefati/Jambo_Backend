import jwt from 'jsonwebtoken'; // Importing the jsonwebtoken library for JWT operations

// Defining the authentication middleware function
const auth = async (req, res, next) => {
    try {
        if (req?.headers?.authorization) { // Checking if the request contains the authorization header
            const token = req.headers.authorization.split(" ")[1]; // Extracting the token from the authorization header
    
            let decodedData; // Declaring a variable to store decoded token data
    
            if (token) { // Verifying the token if it exists
                decodedData = jwt.verify(token, process.env.SECRET_KEY_JWT); // Verifying the token using the secret key
    
                req.userId = decodedData?.id; // Storing the user ID from the decoded token in the request object
            }
    
            next(); // Proceeding to the next middleware or route handler
        } else {
            res.status(401).send({ error: "Not Authorized!" }); // Responding with a 401 status and an error message if the authorization header is missing
        }
    } catch (error) {
        console.log(error); // Logging any errors that occur during authentication
    }
}

export default auth; // Exporting the authentication middleware function for use in other parts of the application
