const db = require('../models')

const getAllUsers = async () => {
    try {
        let users = await db.User.findAll();
        return users;
    } catch (error) {
        throw {status: 500, message: error.message || "failed load users"};
    }
}

const getUser = async (id) => {
    try {
        let user = await db.User.findByPk(id)
        return user
    } catch (error) {
        throw {status: 500, message: error.message || "failed to get user"};
    }
}

const createUser = async (name, email, phone, password) => {
    try {
        let newUser = await db.User.create({
            name,
            email,
            phone,
            password
        });
        return newUser;
    } catch (error) {
        throw {status: 400, message: error.message || "failed to create user"};
    }
}

const updateUser = async (id, name, email, phone, password) => {
    try {
        let updatedUser = await db.User.update({
            name,
            email,
            phone,
            password
        },
            {
                where: {
                    id,
                }
            });
        return updatedUser;
    } catch (error) {
        throw {status: 500, message: error.message || "failed to update user"};
    }
}

const deleteUser = async (id) => {
    try {
        let deletedUser = await db.User.destroy({
            where: {
                id,
            }
        });
        return deletedUser
    } catch (error) {
        throw {status: 500, message: error.message || "failed to delete user"};
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
}