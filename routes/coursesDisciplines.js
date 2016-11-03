import CoursesDisciplines from '../models/Courses_Disciplines';

export default (app) => {
  app.route('/courses_disciplines')
  .get((req, res) => {
    CoursesDisciplines
    .fetchAll({ debug: true })
    .then(response => res.json(response));
  })
  .post((req, res) => {
    console.log('=====', req.body);
    CoursesDisciplines
    .forge()
    .save(req.body, { method: 'insert', debug: true })
    .then(response => res.json(response));
  });
};
