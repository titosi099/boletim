describe('Routes Attributes', () => {
  describe('Route GET /attributes', () => {
    it('Should return a list of attributes', (done) => {
      request
      .get('/attributes')
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
      .end((err, res) => {
        expect(res.body.id).to.be.eql(1);
        expect(res.body.name).to.be.eql('Administrador');
        done(err);
      });
    });
  });
});
