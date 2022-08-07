const { 
    create,
    getUsers,
    getUsersId,
    updateUsers,
    deleteUsers 
} = require("./user.service")

module.exports = {
    createUser: (req, res) => {
        const body = req.body
        create(body, (err, result) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    msg: "Connection Error",
                })
            }
            return res.status(200).json({
                success: 1,
                data: result,
            })
        })
    },
    getUsers: (req, res) => {
        getUsers((err, result) => {
            if (err) throw err
            return res.json({
                success: 1,
                data: result
            })
        })
    },
    getUsersId: (req, res) => {
        const Id = req.body.id
        getUsersId(Id, (err, result) => {
            if (err) throw err
            if (!result) {
                return res.json({
                    success: 2,
                    msg: "Contact not found"
                })
            }
            return res.json({
                success: 1,
                data: result
            })
        })
    },
    updateUsers: (req, res) => {
        const body = req.body
        updateUsers(body, (err, result) => {
            if (err) throw err
            if(!result) {
                return res.json({
                    success: 2,
                    msg: "Contact not Found"
                })
            }
            return res.json({
                success: 1,
                msg: "Updated Successfully"
            })
        })
    },
    deleteUsers: (req, res) => {
        const Id = req.body.id
        deleteUsers(Id, (err, result) => {
            if (err) throw err
            if (!result) {
                return res.json({
                    success: 2,
                    msg: "Contact not Found"
                })
            }
            return res.json({
                success: 1,
                msg: "Contact deleted successfully"
            })
        })
    }
}