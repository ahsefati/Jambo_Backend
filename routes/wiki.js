// Imports and exports the router for the service.
import express from 'express';
import { getCitySummary } from '../controllers/wiki.js';

const router = express.Router();

router.post('/citysummary', getCitySummary)

export default router