import express from 'express';
const router = express.Router();

import controller from '../controllers/testController.js';

router.get('/', controller.get);

export default router;