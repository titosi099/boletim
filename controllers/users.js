const defaultResponse = (data, statusCode = 200) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = 400) => defaultResponse({
  error: message,
}, statusCode);

class UsersController {
  constructor(Users) {
    this.Users = Users;
  }

  getAll() {
    return this.Users
    .fetchAll({ withRelated: 'attribute' })
    .then(result => defaultResponse(result))
    .catch(error => errorResponse(error.message));
  }

  getById(idd) {
    return this.Users
    .where({ id: idd })
    .fetch({ withRelated: 'attribute' })
    .then(result => defaultResponse(result))
    .catch(err => errorResponse(err.message));
  }

  create(data) {
    return this.Users
    .forge()
    .save(data, { method: 'insert' })
    .then(result => defaultResponse(result))
    .catch(err => errorResponse(err.message, 422));
  }

  update(idd, data) {
    return this.Users
    .forge()
    .where({ id: idd })
    .save(data, { method: 'update' })
    .then(result => defaultResponse(result))
    .catch(err => errorResponse(err.message, 422));
  }

  delete(idd) {
    return this.Users
    .where({ id: idd })
    .destroy()
    .then(result => defaultResponse(result, 204))
    .catch(err => errorResponse(err.message, 422));
  }
}

export default UsersController;
