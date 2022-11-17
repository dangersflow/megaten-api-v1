import express from 'express'
import megaten from 'megaten';

const router = express.Router()

router.get('/all', (_req, res) => {
    const demons = megaten.demons.filter(demon => demon.game === 'p3');
    res.send(demons);
})

router.get('/:pageNumber', (req, res) => {
  const pageNumber = parseInt(req.params.pageNumber, 10);
  const demons = megaten.demons.filter(demon => demon.game === 'p3').slice((pageNumber - 1) * 20, pageNumber * 20);
  const totalPages = Math.ceil(megaten.demons.length / 20);
  res.send({ demons, totalPages });
})

export default router
