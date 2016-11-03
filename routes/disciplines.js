import Disciplines from '../models/Disciplines';

export default (app) => {
  app.route('/disciplines')
  .get((req, res) => {
    Disciplines
    .fetchAll({ withRelated: 'teacher' })
    .then(response => res.json(response));
  })
  .post((req, res) => {
    Disciplines
    .forge()
    .save(req.body, { method: 'insert' })
    .then(response => res.json(response));
  });

  app.route('/disciplines/:id')
  .get((req, res) => {
    Disciplines
    .where({ id: req.params.id })
    .fetch({ withRelated: 'teacher' })
    .then(response => res.json(response));
  })
  .put((req, res) => {
    Disciplines
    .forge()
    .where({ id: req.params.id })
    .save(req.body, { method: 'update' })
    .then(response => res.json(response));
  })
  .delete((req, res) => {
    Disciplines
    .where({ id: req.params.id })
    .destroy()
    .then(response => res.json(response));
  });
};
