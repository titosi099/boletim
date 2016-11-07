import jwt from 'jwt-simple';
import Users from '../../../models/Users';

describe('Routes Users', () => {
  let token;
  const jwtSecret = app.config.jwtSecret;
  const userAuth = {
    id: 1,
    name: 'Timas',
    email: 'timas@mail.com',
    password: 'rea123',
    attributes_id: 1,
  };
  const defaultUser = {
    id: 2,
    name: 'Panda Seboso',
    email: 'panda@mail.com',
    password: 'rea123',
    attributes_id: 1,
  };
  const newUser = {
    name: 'Panda created',
    email: 'pandaNew@mail.com',
    password: 'rea123',
    attributes_id: 1,
  };
  const updateUser = {
    id: defaultUser.id,
    name: 'Panda Updated',
    email: 'pandaUp@mail.com',
    attributes_id: 2,
  };

  beforeEach((done) => {
    Users
    .forge()
    .where('id', '!=', '0')
    .destroy()
    .then(() => {
      Users
      .forge()
      .save(userAuth, { method: 'insert' })
      .then((user) => {
        Users
        .forge()
        .save(defaultUser, { method: 'insert' })
        .then(() => {
          token = jwt.encode({ id: user.id }, jwtSecret);
          done();
        });
      });
    });
  });
  describe('Route GET /users', () => {
    it('Should return a list of users', (done) => {
      request
      .get('/users')
      .set('Authorization', `JWT ${token}`)
      .end((err, res) => {
        expect(res.body[1].id).to.be.eql(defaultUser.id);
        expect(res.body[1].name).to.be.eql(defaultUser.name);
        expect(res.body[1].attributes_id).to.be.eql(defaultUser.attributes_id);
        done(err);
      });
    });
  });
  describe('Route GET /users/{id}', () => {
    it('Should return a user', (done) => {
      request
      .get('/users/2')
      .set('Authorization', `JWT ${token}`)
      .end((err, res) => {
        expect(res.body.id).to.be.eql(defaultUser.id);
        expect(res.body.name).to.be.eql(defaultUser.name);
        expect(res.body.attributes_id).to.be.eql(defaultUser.attributes_id);
        done(err);
      });
    });
  });
  describe('Route POST /users', () => {
    it('Should create a user', (done) => {
      request
      .post('/users')
      .set('Authorization', `JWT ${token}`)
      .send(newUser)
      .end((err, res) => {
        expect(res.body.name).to.be.eql(newUser.name);
        expect(res.body.attributes_id).to.be.eql(newUser.attributes_id);
        done(err);
      });
    });
  });
  describe('Route PUT /users/{id}', () => {
    it('Should update a user', (done) => {
      request
      .put('/users/2')
      .set('Authorization', `JWT ${token}`)
      .send(updateUser)
      .end((err, res) => {
        expect(res.body.name).to.be.eql(updateUser.name);
        expect(res.body.attributes_id).to.be.eql(updateUser.attributes_id);
        done(err);
      });
    });
  });
  describe('Route DELETE /users/{id}', () => {
    it('Should delete a user', (done) => {
      request
      .delete('/users/2')
      .set('Authorization', `JWT ${token}`)
      .send()
      .end((err, res) => {
        expect(res.body).to.be.eql({});
        done(err);
      });
    });
  });
});
