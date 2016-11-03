import Attributes from '../models/Attributes';

export default (app) => {
  app.route('/attributes')
  .get((req, res) => {
    Attributes
    .fetchAll()
    .then(response => res.json(response));
  });
  app.route('/attributes/:id')
  .get((req, res) => {
    Attributes
    .where({ id: req.params.id })
    .fetch()
    .then(response => res.json(response));
  });
};
