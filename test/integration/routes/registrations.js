import Registrations from '../../../models/Registrations';
import Students from '../../../models/Students';
import Courses from '../../../models/Courses';

describe('Routes /registrations', () => {
  const student = { id: 1, name: 'Eliton' };
  const course = { id: 1, name: 'SI' };
  const defaultRegistration = {
    id: 100000,
    students_id: 1,
    courses_id: 1,
    year: '2016',
    observation: 'Blablabla',
  };
  const newRegistration = {
    id: 100001,
    students_id: 1,
    courses_id: 1,
    year: '2016',
    observation: 'Blebleble',
  };
  const updateRegistration = {
    id: defaultRegistration.id,
    observation: 'Blobloblo',
  };

  beforeEach((done) => {
    Registrations
    .where('id', '!=', '0')
    .destroy()
    .then(() => {
      Students
      .where('id', '!=', '0')
      .destroy()
      .then(() => {
        Students
        .forge()
        .save(student, { method: 'insert' })
        .then(() => {
          Courses
          .where('id', '!=', '0')
          .destroy()
          .then(() => {
            Courses
            .forge()
            .save(course, { method: 'insert' })
            .then(() => {
              Registrations
              .forge()
              .save(defaultRegistration, { method: 'insert' })
              .then(() => done());
            });
          });
        });
      });
    });
  });
  describe('Route GET /registrations', () => {
    it('Should return a list of registrations', (done) => {
      request
      .get('/registrations')
      .end((err, res) => {
        expect(res.body[0].id).to.be.eql(defaultRegistration.id);
        expect(res.body[0].students_id).to.be.eql(defaultRegistration.students_id);
        expect(res.body[0].courses_id).to.be.eql(defaultRegistration.courses_id);
        expect(res.body[0].year).to.be.eql(defaultRegistration.year);
        done(err);
      });
    });
  });
  describe('Route GET /registrations/{id}', () => {
    it('Should return a registration', (done) => {
      request
      .get('/registrations/100000')
      .end((err, res) => {
        expect(res.body.id).to.be.eql(defaultRegistration.id);
        expect(res.body.students_id).to.be.eql(defaultRegistration.students_id);
        expect(res.body.courses_id).to.be.eql(defaultRegistration.courses_id);
        expect(res.body.year).to.be.eql(defaultRegistration.year);
        done(err);
      });
    });
  });
  describe('Route POST /registrations', () => {
    it('Should create a registration', (done) => {
      request
      .post('/registrations')
      .send(newRegistration)
      .end((err, res) => {
        expect(res.body.id).to.be.eql(newRegistration.id);
        expect(res.body.students_id).to.be.eql(newRegistration.students_id);
        expect(res.body.courses_id).to.be.eql(newRegistration.courses_id);
        expect(res.body.year).to.be.eql(newRegistration.year);
        done(err);
      });
    });
  });
  describe('Route PUT /registrations/{id}', () => {
    it('Should create a registration', (done) => {
      request
      .put('/registrations/100000')
      .send(updateRegistration)
      .end((err, res) => {
        expect(res.body.observation).to.be.eql(updateRegistration.observation);
        done(err);
      });
    });
  });
  describe('Route DELETE /registrations/{id}', () => {
    it('Should delete a registration', (done) => {
      request
      .delete('/registrations/100000')
      .send()
      .end((err, res) => {
        expect(res.body).to.be.eql({});
        done(err);
      });
    });
  });
});
