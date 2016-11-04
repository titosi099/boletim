import Users from '../models/Users';
import UsersController from '../controllers/users';

export default (app) => {
  const usersController = new UsersController(Users);

  app.route('/users')
  .get((req, res) => {
    usersController.getAll()
    .then((response) => {
      res.status(response.statusCode);
      res.json(response.data);
    })
    .catch(response => res.status(response.statusCode));
  })
  .post((req, res) => {
    usersController.create(req.body)
    .then((response) => {
      res.status(response.statusCode);
      res.json(response.data);
    })
    .catch(response => res.status(response.statusCode));
  });

  app.route('/users/:id')
  .get((req, res) => {
    usersController.getById(req.params.id)
    .then((response) => {
      res.status(response.statusCode);
      res.json(response.data);
    })
    .catch(response => res.status(response.statusCode));
  })
  .put((req, res) => {
    usersController.update(req.params.id, req.body)
    .then((response) => {
      res.status(response.statusCode);
      res.json(response.data);
    })
    .catch(response => res.status(response.statusCode));
  })
  .delete((req, res) => {
    usersController.delete(req.params.id)
    .then(response => res.sendStatus(response.statusCode))
    .catch(response => res.status(response.statusCode));
  });
};
