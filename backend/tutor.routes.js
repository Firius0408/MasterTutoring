const router = require('express').Router();
let Tutor = require('./tutor.model');

router.route('/').get((req, res) => {
    Tutor.find()
        .then(tutors => res.json(tutors))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = Number(req.body.phone);
    const subjects = req.body.subjects;
    const canDrive = Boolean(req.body.canDrive);
    const availability = req.body.availability;

    const newTutor = new Tutor({
        name,
        email,
        phone,
        subjects,
        canDrive,
        availability,
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
        .then( () => res.json('Tutor deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Tutor.findById(req.params.id)
        .then(tutor => {
        tutor.name = req.body.name;
        tutor.email = req.body.email;
        tutor.phone = Number(req.body.phone);
        tutor.address = req.body.address;
        tutor.field = req.body.field;
        tutor.subjects = req.body.subjects;
        tutor.canDrive = Boolean(req.body.canDrive);
        tutor.availability = req.body.availability;
        tutor.venmo = req.body.venmo;

        tutor.save()
            .then(() => res.json('Tutor Updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;