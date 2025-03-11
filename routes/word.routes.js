const express = require("express");
const router = express.Router();
const Word = require("../models/Word.model");
const { verifyToken } = require("../middlewares/auth.middlewares");

//Crear una nueva palabra

router.post("/", verifyToken, async (req, res, next) => {
  try {
    const response = await Word.create({
      word: req.body.word,
      meaning: req.body.meaning,
      translation: req.body.translation,
      sentences: req.body.sentences,
      language: req.body.language,
      userId: req.payload._id,
    });

    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//ver todas las palabras

router.get("/", verifyToken, async (req, res, next) => {
  try {
    let filtros;

    console.log(req.query.word);

    if (req.query.word === undefined) {
      filtros = { userId: req.payload._id };
    } else {
      filtros = {
        userId: req.payload._id,
        word: { $regex: req.query.word, $options: "i" },
      };
    }

    const allWords = await Word.find(filtros);

    res.status(200).json(allWords);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//ver una palabra

router.get("/:id", verifyToken, async (req, res, next) => {
  try {
    const word = await Word.findById(req.params.id);
    if (req.payload._id === word.userId) {
      res.status(200).json(word);
    } else {
      res.status(401).json({ message: "not authorized" });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//eliminar una palabra
router.delete("/:id", verifyToken, async (req, res, next) => {
  try {
    const word = await Word.findById(req.params.id);
    console.log(req.payload._id, word.userId);

    if (!word) {
      res.status(404).json({ message: "word not found" });
    } else if (req.payload._id === word.userId.toString()) {
      await Word.findByIdAndDelete(req.params.id);
      res.status(200).json(word);
    } else {
      res.status(401).json({ message: "not authorized" });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//editar una palabra
router.put("/:id", verifyToken, async (req, res, next) => {
  try {
    const updateWord = await Word.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (req.payload._id === updateWord.userId) {
      res.status(200).json(updateWord);
    } else {
      res.status(401).json({ message: "not authorized" });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
