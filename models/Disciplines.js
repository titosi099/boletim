import Bookshself from '../config/db';

const Disciplines = Bookshself.Model.extend({
  tableName: 'disciplines',
  hasTimestamps: true,
  teacher() {
    return this.belongsTo('Users', 'id');
  },
  course() {
    return this.belongsToMany('Courses');
  },
});

export default Bookshself.model('Disciplines', Disciplines);
