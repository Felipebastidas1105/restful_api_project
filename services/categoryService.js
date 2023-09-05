const db = require('../models')

const getAllCategories = async()=>{
    try {
        let Categories = await db.Category.findAll({
            
        })
        return Categories;
    } catch (error) {
        return error.message || "Failed to get the categories"
    }
}

const getCategory = async (id) =>{
    try {
        let Category = await db.Category.findByPk(id)
        return Category;
    } catch (error) {
        throw {status:500, message: error.message || "Failed to get the Category"}
    }
}

const createCategory = async (name) =>{
    try {
        let newCategory = await db.Category.create({
            name
        });
        return  newCategory;
    } catch (error) {
        return error.message || "Category could not be created"
    }
}
const updateCategory = async (id,name) =>{
    try {
        let updatedCategory = await db.Category.update({
            name
        },
        {
            where: {
                id,
            }
        }
        );
        return updatedCategory;
    } catch (error) {
            
    }
}

const deleteCategory = async (id) => {
    try {
        const deletedCategory = await db.Category.destroy({
            where:{
                id,
            }
        })
        return deletedCategory;
    } catch (error) {
        return error.message || "Category could not be deleted"
    }
}

module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
};