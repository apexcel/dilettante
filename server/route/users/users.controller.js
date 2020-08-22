const User = require('../../database/mongo/schema/user');
const mongoConn = require('../../database/mongo/mongoConn');
const jwt = require('jsonwebtoken');

//TODO: 키 따로 관리하기
const SECRET_KEY = 'secret_key_0815';

function stringFromDate(date) {
    let yy = date.getFullYear();
    let mm = '' + (date.getMonth() + 1);
    let dd = '' + date.getDate();

    if (mm.length < 2) mm = '0' + mm;
    if (dd.length < 2) dd = '0' + dd;

    return [yy, mm, dd].join('-');
}

exports.createToken = async function (req, resp, next) {
    try {
        mongoConn.conn();
        const matchUser = await User.findOne(req.body);

        if (matchUser) {
            const token = jwt.sign(
                {
                    username: matchUser.username,
                    fullname: matchUser.fullname,
                    dob: matchUser.dob,
                    lessons: matchUser.lessons,
                    reservations: matchUser.reservations,
                },
                SECRET_KEY,
                { expiresIn: '10m' }
            );

            resp.status(201).json({
                result: true,
                desc: 'Token created',
                token
            });
        }
        else {
            resp.status(400).json({ error: 'Invalid user' })
        }
        mongoConn.disconn();
    }
    catch (err) {
        console.error(err);
        next(err);
    }
    return;
}

exports.signUpUser = async function (req, resp, next) {
    try {
        mongoConn.conn();
        const updateQuery = {
            username: req.body.username,
            fullname: req.body.fullname,
            password: req.body.password,
            dob: req.body.dob,
            tel: req.body.tel,
        };

        const searchQuery = {
            username: req.body.username,
            fullname: req.body.fullname,
            tel: req.body.tel
        };

        const options = {
            upsert: true,
            new: true,
            setDefaultOnInsert: true
        };

        await User.findOneAndUpdate(searchQuery, updateQuery, options, (err, res) => {
            if (err) throw err;
            mongoConn.disconn();
            resp.status(201).json({
                result: true,
                desc: 'User registered'
            });
        })
    }
    catch (err) {
        console.error(err);
        next(err);
    }
    return;
}

exports.getUserInfo = async function (req, resp, next) {
    try {
        mongoConn.conn();
        const result = await User.findOne({ 'fullname': req.params.name });

        if (result !== null) {
            const token = jwt.sign(
                {
                    username: result.username,
                    fullname: result.fullname,
                    password: result.password,
                    dob: result.dob,
                    tel: result.tel,
                    lessons: result.lessons,
                    reservations: result.reservations
                },
                SECRET_KEY,
                { expiresIn: '10m' }
            )
            resp.status(200).json({ 
                result: true, 
                desc: 'Get user infomation',
                token 
            });
        }
        else {
            resp.status(500).json({ error: 'Invalid user' });
        }
        mongoConn.disconn()
    }
    catch (err) {
        console.error(err);
        next(err)
    }
    return;
}

exports.getAllUserInfo = async function (req, resp, next) {
    try {
        mongoConn.conn();
        const result = await User.find({}, (err, res) => {
            if (err) throw err;
        })
        resp.status(200).json(result);
        mongoConn.disconn()
    }
    catch (err) {
        console.error(err);
        next(err);
    }
    return;
}

exports.addLesson = async function (req, resp, next) {
    if (req.body.lesson.lessonName === '') {
        resp.status(400).json({ error: 'Empty lesson' });
        return;
    }
    else {
        try {
            mongoConn.conn();
            const searchQuery = { fullname: req.body.fullname };

            const updateQuery = {
                $inc: { point: req.body.lesson.point },
                $push: {
                    lessons: {
                        name: req.body.lesson.lessonName,
                        counter: req.body.lesson.counter,
                        enrollDate: req.body.lesson.enrollDate,
                        startDate: req.body.lesson.startDate,
                        endDate: req.body.lesson.endDate,
                        discount: req.body.lesson.discount,
                        additionalDays: req.body.lesson.additionalDays,
                        price: req.body.lesson.price
                    }
                }
            };

            const options = {
                upsert: true,
                new: true,
            };

            // 두 번씩 호출 되는 이유
            // 앞에 await 때문, 따라서 callback으로 내부에서 나머지를 호출해야함
            User.findOneAndUpdate(searchQuery, updateQuery, options, (err, res) => {
                if (err) throw err;
                resp.status(200).json({ 
                    result: true,
                    desc: 'Add lesson'
                });
                mongoConn.disconn()
            });
        }
        catch (err) {
            console.error(err);
            next(err);
        }
        return;
    }
}

exports.subtractLessonCounter = async function (req, resp, next) {
    try {
        mongoConn.conn();

        const query = {
            fullname: req.params.name,
            lessons: {
                $elemMatch: {
                    counter: { $gt: 0 },
                    startDate: { $lte: stringFromDate(new Date()) },
                    endDate: { $gte: stringFromDate(new Date()) }
                }
            }
        };
    
        const updateQuery = {
            $inc: {
                'lessons.$.counter': -1
            }
        }
    
        const options = {
            upsert: true,
            new: true,
        };
    
        User.findOneAndUpdate(query, updateQuery, options, (err, res) => {
            if (err) {
                resp.status(500).json({ error: 'Error occured'})
                //throw err;
            }
            else {
                resp.status(200).json({ 
                    result: true,
                    desc: 'Subtract lesson counter'
                })
            }
            mongoConn.disconn()
        })
    }
    catch (err) {
        console.error(err);
        next(err);
    }
    return;
}