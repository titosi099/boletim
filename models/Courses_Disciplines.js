import Bookshelf from '../config/db';

const coursesDisciplines = Bookshelf.Model.extend({
  tableName: 'courses_disciplines',
  idAttribute: ['courses_id', 'disciplines_id'],
});

export default Bookshelf.model('Courses_Disciplines', coursesDisciplines);
