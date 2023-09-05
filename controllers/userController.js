//Enlazamos nuestro servicio 
// const { use } = require('../api/v1/routes/users.routes');
const userService = require('../services/userService');

//Funcion para obtener un todos los usuarios 
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userService.getAllUsers();
        res.status(200).send({ status: "OK", data: allUsers })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
}

//Funcion para obtener un usuario especifico
const getUser = async (req, res) => {
    try {
        let id = req.params.userId;
        const user = await userService.getUser(id)
        res.status(200).send({ status: "OK", data: user })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }

}

//Funcion para crear un usuario especifico
const createUser = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        const missingFields = [];

        if (!name) missingFields.push('name');
        if (!email) missingFields.push('email');
        if (!phone) missingFields.push('phone');
        if (!password) missingFields.push('password');

        if (missingFields.length > 0) {
            const errorMessage = `Missing required fields: ${missingFields.join(', ')}`;
            return res.status(400).send({ status: 'failed', data: { error: errorMessage } });
        }

        const createdUser = await userService.createUser(name, email, phone, password);
        res.status(200).send({ status: "OK", data: createdUser })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
}

//Funcion para modificar un usuario
const updateUser = async (req, res) => {
    try {
        let id = req.params.userId;
        let { name, email, phone, password } = req.body;
        const updatedUser = await userService.updateUser(id, name, email, phone, password);
        res.status(200).send({ status: "OK", data: updatedUser })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
}

//Funcion para eliminar un usuario 
const deleteUser = async (req, res) => {
    try {
        let id = req.params.userId;
        const deletedUser = await userService.deleteUser(id)
        res.status(200).send({ status: "OK", data: deletedUser })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};