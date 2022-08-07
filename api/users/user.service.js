const pool = require("../../config/database")

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into contacts(id, first_name, last_name, email, mobile_number)
                values(?,?,?,?,?)`,
                    [
                        data.id, 
                        data.first_name, 
                        data.last_name, 
                        data.email, 
                        data.mobile_number
                ],
            (err, result, field) => {
                if (err) {
                    callBack(err)
                }
                return callBack(null, result)
            }
        )
    },
    getUsers: callBack => {
        pool.query(
            `select * from contacts`,
            [],
            (err, result, field) => {
                if (err) {
                    return callBack(err)
                }
                return callBack(null, result)
            }
        )
    },
    getUsersId: (Id, callBack) => {
        pool.query(
            `select * from contacts where id=?`,
            [Id],
            (err, result, field) => {
                if (err) {
                    return callBack(err)
                }
                return callBack(null, result[0])
            }
        )
    },
    updateUsers: (data, callBack) => {
        pool.query(
            `update contacts set first_name=?, last_name=?, email=?, mobile_number=? where id=?`,
            [
                data.first_name, 
                data.last_name, 
                data.email, 
                data.mobile_number,
                data.id, 
            ],
            (err, result, field) => {
                if (err) {
                    return callBack(err)
                }
                return callBack(null, result)
            }
        )
    },
    deleteUsers: (Id, callBack) => {
        pool.query(
            `delete from contacts where id=?`,
            [Id],
            (err, result, field) => {
                if (err) {
                    return callBack(err)
                }
                return callBack(null, result)
            }
        )
    }
}