import Bookshelf from '../config/db';
import Attributes from './Attributes';

const Users = Bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  attribute() {
    return this.belongsTo(Attributes, 'attributes_id');
  },
  discipline() {
    return this.hasMany('Disciplines', 'teacher_id');
  },
});

export default Bookshelf.model('Users', Users);
