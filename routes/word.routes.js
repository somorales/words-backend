const express = require("express");
const router = express.Router();
const Word = require("../models/Word.model");

//Crear una nueva palabra

router.post("/", async (req, res, next) => {
  try {
    const response = await Word.create({
      word: req.body.word,
      meaning: req.body.meaning,
      meaning: req.body.meaning,
      translation: req.body.translation,
      sentences: req.body.sentences,
    });

    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//ver todas las palabras

router.get("/", async (req, res, next) => {
  try {
    const allWords = await Word.find();

    res.status(200).json(allWords);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
