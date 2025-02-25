const express = require("express");
const router = express.Router();
const Word = require("../models/Word.model");

//Crear una nueva palabra

router.post("/", async (req, res, next) => {
  try {
    const response = await Word.create({
      word: req.body.word,
      meaning: req.body.meaning,
      translation: req.body.translation,
      sentences: req.body.sentences,
      language: req.body.language,
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

//ver una palabra

router.get("/:id", async (req, res, next) => {
  try {
    const word = await Word.findById(req.params.id);
    res.status(200).json(word);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//eliminar una palabra
router.delete("/:id", async (req, res, next) => {
  try {
    const response = await Word.findByIdAndDelete(req.params.id);

    res.status(204).send();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//editar una palabra
router.put("/:id", async (req, res, next) => {
  try {
    const updateWord = await Word.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updateWord);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
