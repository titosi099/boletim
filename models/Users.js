import bcrypt from 'bcrypt';
import Promisse from 'bluebird';
import Bookshelf from '../config/db';
import Attributes from './Attributes';

const Users = Bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  initialize() {
    this.on('creating', this.hashPassword, this);
  },
  hashPassword(model) {
    return new Promisse((resolve, reject) => {
      bcrypt.hash(model.attributes.password, 10, (err, hash) => {
        if (err) reject(err);
        model.set('password', hash);
        resolve(hash);
      });
    });
  },
  isPassword(encodedPassword, password) {
    return new Promisse((resolve, reject) => {
      bcrypt.compare(password, encodedPassword, (err, match) => {
        if (err) reject(err);
        resolve(match);
      });
    });
  },
  // isPassword(encodedPassword, password) {
  //   return bcrypt.compareSync(password, encodedPassword);
  // },
  attribute() {
    return this.belongsTo(Attributes, 'attributes_id');
  },
  discipline() {
    return this.hasMany('Disciplines', 'teacher_id');
  },
});

export default Bookshelf.model('Users', Users);
