import express from 'express';

import {
    createPlayers,
} from '../Controllers/AIController.js';

const router = express.Router();

router.post('/create-players', createPlayers);

export default router;