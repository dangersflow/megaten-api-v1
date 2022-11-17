import express from 'express'
import megaten from 'megaten';

const router = express.Router()

router.get('/all', (_req, res) => {
  res.send(megaten.demons);
})

router.get('/:gameName/all', (req, res) => {
  const gameName = req.params.gameName;
  const demons = megaten.demons.filter(demon => demon.game === gameName);
  res.send(demons);
})

router.get('/:pageNumber', (req, res) => {
  const pageNumber = parseInt(req.params.pageNumber, 10);
  const demons = megaten.demons.slice((pageNumber - 1) * 20, pageNumber * 20);
  const totalPages = Math.ceil(megaten.demons.length / 20);
  res.send({ demons, totalPages });
})

router.get('/:gameName/:pageNumber', (req, res) => {
  const gameName = req.params.gameName;
  const pageNumber = parseInt(req.params.pageNumber, 10);
  const demons = megaten.demons.filter(demon => demon.game === gameName);
  const demonsOnPage = demons.slice((pageNumber - 1) * 20, pageNumber * 20);
  const totalPages = Math.ceil(demons.length / 20);
  res.send({ demons: demonsOnPage, totalPages });
})

export default router
