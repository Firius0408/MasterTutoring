const router = require('express').Router();
let Person = require('./person.model');

router.route('/').get((req, res) => {
    Person.find()
        .then(persons => res.json(persons))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = Number(req.body.phone);
    const address = req.body.address;
    const field = req.body.field;
    const subjects = req.body.subjects;
    const canDrive = Boolean(req.body.canDrive);
    const availability = req.body.availability;
    const venmo = req.body.venmo;

    const newPerson = new Person({
        name,
        email,
        phone,
        address,
        field,
        subjects,
        canDrive,
        availability,
        venmo,
    });

    newPerson.save()
        .then(() => res.json('Person Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Person.findById(req.params.id)
        .then(person => res.json(person))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Person.findByIdAndDelete(req.params.id)
        .then( () => res.json('Person deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Person.findById(req.params.id)
        .then(person => {
        person.name = req.body.name;
        person.email = req.body.email;
        person.phone = Number(req.body.phone);
        person.address = req.body.address;
        person.field = req.body.field;
        person.subjects = req.body.subjects;
        person.canDrive = Boolean(req.body.canDrive);
        person.availability = req.body.availability;
        person.venmo = req.body.venmo;

        person.save()
            .then(() => res.json('Person Updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;