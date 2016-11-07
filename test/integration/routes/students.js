import jwt from 'jwt-simple';
import Students from '../../../models/Students';

describe('Routes Students', () => {
  const jwtSecret = app.config.jwtSecret;
  let token = jwt.encode({ id: 1 }, jwtSecret);
  const defaultStudent = {
    id: 1,
    name: 'Suricate Seboso',
  };
  const newStudent = {
    name: 'Suricate created',
  };
  const updateStudent = {
    id: defaultStudent.id,
    name: 'Suricate Updated',
  };

  beforeEach((done) => {
    Students
    .where('id', '!=', '0')
    .destroy()
    .then(() => {
      Students
      .forge(defaultStudent)
      .save(null, { method: 'insert' });
    })
    .then(() => done());
  });
  describe('Route GET /students', () => {
    it('Should return a list of students', (done) => {
      request
      .get('/students')
      .set('Authorization', `JWT ${token}`)
      .end((err, res) => {
        expect(res.body[0].id).to.be.eql(defaultStudent.id);
        expect(res.body[0].name).to.be.eql(defaultStudent.name);
        done(err);
      });
    });
  });
  describe('Route GET /students/{id}', () => {
    it('Should return a student', (done) => {
      request
      .get('/students/1')
      .set('Authorization', `JWT ${token}`)
      .end((err, res) => {
        expect(res.body.id).to.be.eql(defaultStudent.id);
        expect(res.body.name).to.be.eql(defaultStudent.name);
        done(err);
      });
    });
  });
  describe('Route POST /students', () => {
    it('Should create a student', (done) => {
      request
      .post('/students')
      .set('Authorization', `JWT ${token}`)
      .send(newStudent)
      .end((err, res) => {
        expect(res.body.name).to.be.eql(newStudent.name);
        done(err);
      });
    });
  });
  describe('Route PUT /students/{id}', () => {
    it('Should update a student', (done) => {
      request
      .put('/students/1')
      .set('Authorization', `JWT ${token}`)
      .send(updateStudent)
      .end((err, res) => {
        expect(res.body.name).to.be.eql(updateStudent.name);
        done(err);
      });
    });
  });
  describe('Route DELETE /students/{id}', () => {
    it('Should delete a student', (done) => {
      request
      .delete('/students/1')
      .set('Authorization', `JWT ${token}`)
      .send()
      .end((err, res) => {
        expect(res.body).to.be.eql({});
        done(err);
      });
    });
  });
});
