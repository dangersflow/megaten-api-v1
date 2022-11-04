import express from 'express'
import megaten from 'megaten';

const router = express.Router()

router.get('/all', (_req, res) => {
  res.send(megaten.demons);
})

export default router
