import jwt from 'jwt-simple';
import Disciplines from '../../../models/Disciplines';

describe('Routes Disciplines', () => {
  const jwtSecret = app.config.jwtSecret;
  let token = jwt.encode({ id: 1 }, jwtSecret);
  const defaultDiscipline = {
    id: 1,
    name: 'Programação I',
    hours: '02:00',
    teacher_id: 1,
  };
  const newDiscipline = {
    name: 'Programação I',
    hours: '02:00',
    teacher_id: 1,
  };
  const updateDiscipline = {
    id: defaultDiscipline.id,
    name: 'Programação II',
    hours: '03:00',
    teacher_id: 1,
  };

  beforeEach((done) => {
    Disciplines
    .forge()
    .where('id', '!=', '0')
    .destroy()
    .then(() => {
      Disciplines
      .forge()
      .save(defaultDiscipline, { method: 'insert' });
    })
    .then(() => done());
  });
  describe('Route GET /disciplines', () => {
    it('Should return a list of disciplines', (done) => {
      request
      .get('/disciplines')
      .set('Authorization', `JWT ${token}`)
      .end((err, res) => {
        expect(res.body[0].id).to.be.eql(defaultDiscipline.id);
        expect(res.body[0].name).to.be.eql(defaultDiscipline.name);
        done(err);
      });
    });
  });
  describe('Route GET /disciplines/{id}', () => {
    it('Should return a discipline', (done) => {
      request
      .get('/disciplines/1')
      .set('Authorization', `JWT ${token}`)
      .end((err, res) => {
        expect(res.body.id).to.be.eql(defaultDiscipline.id);
        expect(res.body.name).to.be.eql(defaultDiscipline.name);
        done(err);
      });
    });
  });
  describe('Route POST /disciplines', () => {
    it('Should create a discipline', (done) => {
      request
      .post('/disciplines')
      .set('Authorization', `JWT ${token}`)
      .send(newDiscipline)
      .end((err, res) => {
        expect(res.body.name).to.be.eql(newDiscipline.name);
        done(err);
      });
    });
  });
  describe('Route PUT /disciplines/{id}', () => {
    it('Should update a discipline', (done) => {
      request
      .put('/disciplines/1')
      .set('Authorization', `JWT ${token}`)
      .send(updateDiscipline)
      .end((err, res) => {
        expect(res.body.name).to.be.eql(updateDiscipline.name);
        done(err);
      });
    });
  });
  describe('Route DELETE /disciplines/{id}', () => {
    it('Should delete a discipline', (done) => {
      request
      .delete('/disciplines/1')
      .set('Authorization', `JWT ${token}`)
      .send()
      .end((err, res) => {
        expect(res.body).to.be.eql({});
        done(err);
      });
    });
  });
});
