import Users from '../models/Users';

export default (app) => {
  app.route('/users')
  .get((req, res) => {
    Users
    .fetchAll({ withRelated: 'attribute' })
    .then(users => res.json(users));
  })
  .post((req, res) => {
    Users
    .forge()
    .save(req.body, { method: 'insert' })
    .then(response => res.json(response));
  });

  app.route('/users/:id')
  .get((req, res) => {
    Users
    .where({ id: req.params.id })
    .fetch({ withRelated: 'attribute' })
    .then(user => res.json(user));
  })
  .put((req, res) => {
    Users
    .forge()
    .save(req.body, { method: 'update' })
    .then(response => res.json(response));
  })
  .delete((req, res) => {
    Users
    .where({ id: req.params.id })
    .destroy()
    .then(response => res.json(response));
  });
};
