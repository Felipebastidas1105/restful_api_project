const {Router} = require('express');

const categoriController = require('../../../controllers/categoriController');
const router = Router();

router.get("/", categoriController.getAllCategories);
router.get("/:categoryId", categoriController.getCategory);
router.post("/", categoriController.createCategory);
router.put("/:categoryId", categoriController.updateCategory);
router.delete("/:categoryId", categoriController.deleteCategory);

module.exports = router;