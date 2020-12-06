const router = require('express').Router();
const bcrypt = require('bcrypt');

const saltRounds = 10;
let User = require('./user.model');
let Cookie = require('./cookies.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const userName = req.body.userName;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phoneNumber = Number(req.body.phoneNumber);
    const email = req.body.email;

    bcrypt.hash(req.body.password, saltRounds)
        .then(hash => {
            const newUser = new User({
                _id: userName,
                userName,
                firstName,
                lastName,
                phoneNumber,
                email,
                password: hash,
            });
        
            newUser.save()
                .then(() => res.json('User Added!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
    
});

router.route('/login').post((req, res) => {
    User.findById(req.body.userName)
        .then(user => {
            bcrypt.compare(req.body.password, user.password)
                .then(result => {
                    if (result) {
                        bcrypt.hash("idk", saltRounds)
                            .then(hash => {
                                res.cookie('loginAuth', hash);
                                const newCookie = new Cookie({
                                    userName: req.body.userName,
                                    cookieValue: hash,
                                });

                                newCookie.save()
                                    .then(() => res.json('Cookie Added!'))
                                    .catch(err => res.status(400).json('Error: ' + err));
                            })
                            .catch(err => res.status(400).json('Error: ' + err));
                    }
                    else {
                        res.status(400).json('Unable to authenticate');
                    }
                })
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/logout').delete((req, res) => {
    Cookie.findOneAndDelete({ cookieValue: req.cookies['loginAuth'] })
        .then(() => res.clearCookie('loginAuth').json('Logged out.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user._id = req.body.userName;
            user.userName = req.body.userName;
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.phoneNumber = Number(req.body.phoneNumber);
            user.email = req.body.email;
            user.password = req.body.password;

            user.save()
                .then(() => res.json('User Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;