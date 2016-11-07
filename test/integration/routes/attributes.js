import jwt from 'jwt-simple';

describe('Routes Attributes', () => {
  const jwtSecret = app.config.jwtSecret;
  let token = jwt.encode({ id: 1 }, jwtSecret);
  describe('Route GET /attributes', () => {
    it('Should return a list of attributes', (done) => {
      request
      .get('/attributes')
      .set('Authorization', `JWT ${token}`)
      .end((err, res) => {
        expect(res.body[0].id).to.be.eql(1);
        expect(res.body[0].name).to.be.eql('Administrador');
        done(err);
      });
    });
  });
  describe('Route GET /attributes/{id}', () => {
    it('Should return a student', (done) => {
      request
      .get('/attributes/1')
      .set('Authorization', `JWT ${token}`)
      .end((err, res) => {
        expect(res.body.id).to.be.eql(1);
        expect(res.body.name).to.be.eql('Administrador');
        done(err);
      });
    });
  });
});
