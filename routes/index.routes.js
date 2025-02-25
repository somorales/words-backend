const router = require("express").Router();

// ruta user
const favoriteRouter = require("./favorite.routes");
router.use("/favorites", favoriteRouter);

//ruta de subir imagen
const uploadRoutes = require("./upload.routes");
router.use("/upload", uploadRoutes);

//ruta de productos
const productRouter = require("./product.routes.js");
router.use("/products", productRouter);

// ruta de kit
const kitRouter = require("./kit.routes.js");
router.use("/kits", kitRouter);

// ruta user
const authRouter = require("./auth.routes");
router.use("/auth", authRouter);

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

module.exports = router;
