import Students from '../models/Students';

export default (app) => {
  app.route('/students')
  .all(app.auth.authenticate())
  .get((req, res) => {
    Students
    .fetchAll()
    .then(response => res.json(response));
  })
  .post((req, res) => {
    Students
    .forge()
    .save(req.body, { method: 'insert' })
    .then(response => res.json(response));
  });

  app.route('/students/:id')
  .all(app.auth.authenticate())
  .get((req, res) => {
    Students
    .where({ id: req.params.id })
    .fetch()
    .then(response => res.json(response));
  })
  .put((req, res) => {
    Students
    .forge()
    .where({ id: req.params.id })
    .save(req.body, { method: 'update' })
    .then(response => res.json(response));
  })
  .delete((req, res) => {
    Students
    .where({ id: req.params.id })
    .destroy()
    .then(response => res.json(response));
  });
};
