import Bookshelf from '../config/db';
import Users from './Users';

const Attributes = Bookshelf.Model.extend({
  tableName: 'attributes',
  user() {
    return this.hasMany(Users, 'attributes_id');
  },
});

export default Bookshelf.model('Attributes', Attributes);
