import express from 'express'; // Importing the Express framework

// Importing user-related controller functions and authentication middleware
import { saveATool, signin, signup, updateUserInfo, updateUserAvatar, changeUserPass, sendVerificationCode, changeUserPassWithVerificationCode } from '../controllers/users.js';
import auth from '../middleware/auth.js';

const router = express.Router(); // Creating an instance of an Express router

// Defining routes and associating them with corresponding controller functions and middleware
router.post('/signin', signin); // Route for user sign-in
router.post('/signup', signup); // Route for user sign-up
router.patch('/sendVerificationCode', sendVerificationCode); // Route for sending verification code
router.patch('/changeUserPassWithVerificationCode', changeUserPassWithVerificationCode); // Route for changing password with verification code
router.patch('/updateUserInfo', auth, updateUserInfo); // Route for updating user information (requires authentication)
router.patch('/changeUserPass', auth, changeUserPass); // Route for changing user password (requires authentication)
router.patch('/updateUserAvatar', auth, updateUserAvatar); // Route for updating user avatar (requires authentication)
router.patch('/saveatool/:id', auth, saveATool); // Route for saving a tool (requires authentication)

export default router; // Exporting the router for use in other parts of the application
