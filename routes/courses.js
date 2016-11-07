import Courses from '../models/Courses';

export default (app) => {
  app.route('/courses')
  .all(app.auth.authenticate())
  .get((req, res) => {
    Courses
    .fetchAll({ withRelated: ['discipline'] })
    .then(response => res.json(response));
  })
  .post((req, res) => {
    Courses
    .forge()
    .save(req.body, { method: 'insert' })
    .then(response => res.json(response));
  });
  app.route('/courses/:id')
  .all(app.auth.authenticate())
  .get((req, res) => {
    Courses
    .where({ id: req.params.id })
    .fetch()
    .then(response => res.json(response));
  })
  .put((req, res) => {
    Courses
    .forge()
    .where({ id: req.params.id })
    .save(req.body, { method: 'update' })
    .then(response => res.json(response));
  })
  .delete((req, res) => {
    Courses
    .where({ id: req.params.id })
    .destroy()
    .then(response => res.json(response));
  });
};
