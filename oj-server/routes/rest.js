const express = require('express');
const router = express.Router();
const problemService = require("../services/problemService");
const jsonParser = require('body-parser').json();

router.get('/problems', async (req, res) => {
  let problems = await problemService.getProblems();
  res.json(problems);
});

router.get('/problems/:id', async (req, res) => {
  const id = req.params.id;
  let problem = await problemService.getProblem(id);
  res.json(problem);
});


router.post('/problems', jsonParser, async (req, res) => {
  try {
    let problem = await problemService.addProblem(req.body);
    res.json(problem);
  } catch (e) {
    res.status(400).send('Error:' + e);
  }
});
module.exports = router;

