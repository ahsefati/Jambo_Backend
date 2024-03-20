// Imports and exports the service module. This is a convenience function to allow developers to add services to the service
import express from 'express';
import { getCityCurrentWeather } from '../controllers/weather.js';

const router = express.Router();

router.post('/citycurrentweather', getCityCurrentWeather )

export default router