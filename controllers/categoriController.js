const categoriService = require('../services/categoryService');

const getAllCategories = async (req, res) => {
    try {
        const allCategories = await categoriService.getAllCategories();
        res.status(200).send({ status: "OK", data: allCategories })
    } catch (error) {
        res.status(error.status || 400).send({ status: "FAILED", data: { error: error.message } })

    }
}
const getCategory = async (req, res) => {
    let id = req.params.categoryId;
    try {
        const category = await categoriService.getCategory(id);
        res.status(200).send({ status: "OK", data: category })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } })
    }
}
const createCategory = async (req, res) => {
    const { body } = req;
    const createdCategory = await categoriService.createCategory(body.name);
    if (createdCategory) {
        res.status(201).send({ status: "OK", data: createdCategory })
    } else
        res.status(400).send({ status: "FAILED", data: createdCategory })
}
const updateCategory = async (req, res) => {
    let id = req.params.categoryId;
    let { name } = req.body;

    const updatedCategory = await categoriService.updateCategory(id,name);
    if (updatedCategory) {
        res.status(201).send({ status: "OK", data: updatedCategory })
    } else
        res.status(400).send({ status: "FAILED", data: updatedCategory })
}

const deleteCategory = async (req, res) => {
    let id = req.params.categoryId;
    const deletedcategory = await categoriService.deleteCategory(id);
    if (deletedcategory) {
        res.status(201).send({ status: "OK", data: deletedcategory })
    } else
        res.status(400).send({ status: "FAILED", data: deletedcategory })
}

module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
};