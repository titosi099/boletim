import Bookshelf from '../config/db';

const Courses = Bookshelf.Model.extend({
  tableName: 'courses',
  hasTimestamps: true,
  registration() {
    return this.hasMany('Registrations', 'courses_id');
  },
  discipline() {
    return this.belongsToMany('Disciplines', 'courses_disciplines', 'courses_id', 'disciplines_id');
  },
});

export default Bookshelf.model('Courses', Courses);
