//We link our service 
const articleService = require('../services/articleService');

const getAllArticles = async (req, res) => {
    try {
        const allArticles = await articleService.getAllArticles();
        res.status(200).send({ status: "OK", data: allArticles })
    } catch (error) {
        res.status(error.status || 400).send({ status: "FAILED", data: { error: error.message } })
    }
}
const getArticle = async (req, res) => {
    let id = req.params.ArticleId;
    try {
        const article = await articleService.getArticle(id);
        res.status(200).send({ status: "OK", data: article })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } })
    }
}
const createArticle = async (req, res) => {
    const { body } = req;
    const createdArticle = await articleService.createArticle(body.title, body.content, body.UserId);
    if (createdArticle) {
        res.status(201).send({ status: "OK", data: createdArticle })
    }else
        res.status(400).send({status:"FAILED" , data: createdArticle})
}
const updateArticle = async (req, res) => {
    let id = req.params.ArticleId;
    let {title, content,UserId} = req.body;

    const updatedArticle = await articleService.updateArticle(id,title,content,UserId);
    if (updatedArticle) {
        res.status(201).send({ status: "OK", data: updatedArticle })
    }else
        res.status(400).send({status:"FAILED" , data: updatedArticle})
}

const deleteArticle = async (req, res) => {
    let id = req.params.ArticleId;
    const deletedArticle = await articleService.deleteArticle(id);
    if (deletedArticle) {
        res.status(201).send({ status: "OK", data: deletedArticle })
    }else
        res.status(400).send({status:"FAILED" , data: deletedArticle})
}

module.exports = {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle,
};