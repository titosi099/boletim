import Attributes from '../models/Attributes';

export default (app) => {
  app.route('/attributes')
  .all(app.auth.authenticate())
  .get((req, res) => {
    Attributes
    .fetchAll()
    .then(response => res.json(response));
  });
  app.route('/attributes/:id')
  .all(app.auth.authenticate())
  .get((req, res) => {
    Attributes
    .where({ id: req.params.id })
    .fetch()
    .then(response => res.json(response));
  });
};
