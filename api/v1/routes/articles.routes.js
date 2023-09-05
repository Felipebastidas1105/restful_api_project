//Create the route for the use the verbs HTPP
const { Router } = require('express');
//Include our controller the user 
const articleController = require('../../../controllers/articleController');
const router = Router(); //Call the method Router the express

router.get("/", articleController.getAllArticles);
router.get("/:articleId", articleController.getArticle);
router.post("/", articleController.createArticle);
router.put("/:articleId", articleController.updateArticle);
router.delete("/:articleId", articleController.deleteArticle);

module.exports = router;

