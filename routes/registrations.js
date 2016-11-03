import Registrations from '../models/Registrations';

export default (app) => {
  app.route('/registrations')
  .get((req, res) => {
    Registrations
    .fetchAll({ withRelated: ['student', 'course'] })
    .then(response => res.json(response));
  })
  .post((req, res) => {
    Registrations
    .forge()
    .save(req.body, { method: 'insert' })
    .then(response => res.json(response));
  });

  app.route('/registrations/:id')
  .get((req, res) => {
    Registrations
    .where({ id: req.params.id })
    .fetch({ withRelated: ['student', 'course'] })
    .then(response => res.json(response));
  })
  .put((req, res) => {
    Registrations
    .forge()
    .where({ id: req.params.id })
    .save(req.body, { method: 'update' })
    .then(response => res.json(response));
  })
  .delete((req, res) => {
    Registrations
    .where({ id: req.params.id })
    .destroy()
    .then(response => res.json(response));
  });
};
