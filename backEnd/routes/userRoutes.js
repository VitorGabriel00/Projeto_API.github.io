const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rota GET para listar todos os usuários
router.get("/users", userController.getUsers);

// Rota POST para criar um novo usuário
router.post("/users", userController.createUsers);

// Rota PUT para atualizar um usuário existente
router.put("/users/:id", userController.updateUsers);

// Rota DELETE para remover um usuário
router.delete("/users/:id", userController.deleteUser);

// Rota GET para buscar um usuário pelo ID
router.get("/users/:id", userController.getUserByIdById);

module.exports = router;