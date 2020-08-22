const getConn = require('../../database/mysql/mysqlConn');

exports.getBookedData = async function(req, resp, next) {
    await getConn((conn) => {
        const query = "SELECT * FROM ??";
        const queryParams = `time_table${req.body.date}`
        conn.query(query, queryParams, (err, row) => {
            if (err) throw err;
            resp.status(200).json(row)
            conn.release()
        });
    });
    return;
}

exports.setBookedData = async function(req, resp, next) {
    await getConn((conn) => {
        const query = "UPDATE ?? SET booked_data = (?) WHERE time = ?;";
        const queryParams = [
            `time_table${req.body.date}`,
            req.body.booked_data,
            req.body.time
        ];

        conn.query(query, queryParams, (err, row) => {
            if (err) throw err
            resp.status(200).json(row)
        })
        conn.release();
    });
    return;
}

exports.findReservation = async function(req, resp, next) {
    await getConn(async (conn) => {
        const query = 'SELECT TABLE_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE COLUMN_NAME=?';
        const queryParams = 'booked_data'

        await conn.query(query, queryParams, async (err, res) => {
            if (err) throw err;
            const tableNames = res.map((el, idx) => el['TABLE_NAME']);
            searchBookedUser(tableNames);
        })
        conn.release();
    })

    function searchBookedUser(_tableNames) {
        getConn(async (conn) => {
            let resultSet = [];
            for (let i = 0; i < _tableNames.length; i += 1) {
                const query2 = 'SELECT * FROM ?? WHERE booked_data LIKE ?';
                await conn.query(query2, ([_tableNames[i], `%${req.body.fullname}%`]), (err, res) => {
                    if (err) throw err;
                    if (res !== null && res.length > 0) {
                        const emptyObj = {};
                        Object.defineProperty(emptyObj, _tableNames[i], {
                            value: res,
                            writable: false,
                            enumerable: true
                        });
                        resultSet.push(emptyObj);
                    }
                    if (i === _tableNames.length - 1) {
                        resp.status(200).send(resultSet);
                        conn.release();
                    }
                })
            }
        })
    }
    return;
}