import jwt from 'jwt-simple';
import Courses from '../../../models/Courses';

describe('Routes Courses', () => {
  const jwtSecret = app.config.jwtSecret;
  let token = jwt.encode({ id: 1 }, jwtSecret);
  const defaultCourse = {
    id: 1,
    name: 'SI',
  };
  const newCourse = {
    name: 'Administração',
  };
  const updateCourse = {
    id: defaultCourse.id,
    name: 'Sistemas de Informação',
  };

  beforeEach((done) => {
    Courses
    .forge()
    .where('id', '!=', '0')
    .destroy()
    .then(() => {
      Courses
      .forge()
      .save(defaultCourse, { method: 'insert' });
    })
    .then(() => done());
  });
  describe('Route GET /courses', () => {
    it('Should return a list of courses', (done) => {
      request
      .get('/courses')
      .set('Authorization', `JWT ${token}`)
      .end((err, res) => {
        expect(res.body[0].id).to.be.eql(defaultCourse.id);
        expect(res.body[0].name).to.be.eql(defaultCourse.name);
        done(err);
      });
    });
  });
  describe('Route GET /courses/{id}', () => {
    it('Should return a course', (done) => {
      request
      .get('/courses/1')
      .set('Authorization', `JWT ${token}`)
      .end((err, res) => {
        expect(res.body.id).to.be.eql(defaultCourse.id);
        expect(res.body.name).to.be.eql(defaultCourse.name);
        done(err);
      });
    });
  });
  describe('Route POST /courses', () => {
    it('Should create a course', (done) => {
      request
      .post('/courses')
      .set('Authorization', `JWT ${token}`)
      .send(newCourse)
      .end((err, res) => {
        expect(res.body.name).to.be.eql(newCourse.name);
        done(err);
      });
    });
  });
  describe('Route PUT /courses/{id}', () => {
    it('Should update a course', (done) => {
      request
      .put('/courses/1')
      .set('Authorization', `JWT ${token}`)
      .send(updateCourse)
      .end((err, res) => {
        expect(res.body.name).to.be.eql(updateCourse.name);
        done(err);
      });
    });
  });
  describe('Route DELETE /courses/{id}', () => {
    it('Should delete a course', (done) => {
      request
      .delete('/courses/1')
      .set('Authorization', `JWT ${token}`)
      .send()
      .end((err, res) => {
        expect(res.body).to.be.eql({});
        done(err);
      });
    });
  });
});
