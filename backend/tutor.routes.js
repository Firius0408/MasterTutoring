const router = require('express').Router();
let Tutor = require('./tutor.model');

router.route('/').get((req, res) => {
    Tutor.find()
        .then(tutors => res.json(tutors))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phone = Number(req.body.phone);
    const subjects = req.body.subjects;
    const canDrive = Boolean(req.body.canDrive);
    const availability = req.body.availability;
    const likes = 0;
    const dislikes = 0;

    const newTutor = new Tutor({
        firstName,
        lastName,
        email,
        phone,
        subjects,
        canDrive,
        availability,
        likes,
        dislikes,
    });

    newTutor.save()
        .then(() => res.json('Tutor Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Tutor.findById(req.params.id)
        .then(tutor => res.json(tutor))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Tutor.findByIdAndDelete(req.params.id)
        .then(() => res.json('Tutor deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Tutor.findById(req.params.id)
        .then(tutor => {
            tutor.firstName = req.body.firstName;
            tutor.lastName = req.body.lastName;
            tutor.email = req.body.email;
            tutor.phone = Number(req.body.phone);
            tutor.subjects = req.body.subjects;
            tutor.canDrive = Boolean(req.body.canDrive);
            tutor.availability = req.body.availability;

            tutor.save()
                .then(() => res.json('Tutor Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
            })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/like/:id').post((req, res) => {
    Tutor.findById(req.params.id)
        .then(tutor => {
            tutor.likes++;

            tutor.save()
                .then(() => res.json('Tutor LIked!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/dislike/:id').post((req, res) => {
    Tutor.findById(req.params.id)
        .then(tutor => {
            tutor.dislikes++;

            tutor.save()
                .then(() => res.json('Tutor LIked!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;