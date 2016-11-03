import Bookshelf from '../config/db';
import Registrations from './Registrations';

const Students = Bookshelf.Model.extend({
  tableName: 'students',
  hasTimestamps: true,

  registration() {
    return this.hasMany(Registrations, 'students_id');
  },
});

export default Bookshelf.model('Students', Students);
