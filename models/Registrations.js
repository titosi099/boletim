import Bookshelf from '../config/db';
import Students from './Students';

const Registrations = Bookshelf.Model.extend({
  tableName: 'registrations',
  hasTimestamps: true,
  student() {
    return this.belongsTo(Students, 'id');
  },
  course() {
    return this.belongsTo('Courses', 'id');
  },
});

export default Bookshelf.model('Registrations', Registrations);
