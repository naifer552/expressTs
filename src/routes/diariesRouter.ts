const express = require('express');

const router = express.Router();

router.get('/', (_req: any, res: any) => {
    res.send('Fetching all entry diaries');
});

router.post('/', (_req: any, res: any) => {
    res.send('Saving a diary');
});

export default router;