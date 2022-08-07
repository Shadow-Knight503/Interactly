const { 
    createUser, 
    getUsers, 
    getUsersId, 
    updateUsers, 
    deleteUsers 
} = require("./user.controller")
const router = require("express").Router()

router.post('/', createUser)
router.get('/', getUsers)
router.get('/:id', getUsersId)
router.patch('/', updateUsers)
router.delete('/', deleteUsers)

module.exports = router