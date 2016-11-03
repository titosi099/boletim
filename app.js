import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import db from './config/db';
import studentsRoute from './routes/students';
import usersRoute from './routes/users';
import attributesRoute from './routes/attributes';
import coursesRoute from './routes/courses';
import disciplinesRoute from './routes/disciplines';
import registrationsRoute from './routes/registrations';
import coursesDisciplinesRoute from './routes/coursesDisciplines';

const app = express();
app.config = config;
app.db = db;

app.set('port', 3000);
app.use(bodyParser.json());

studentsRoute(app);
usersRoute(app);
attributesRoute(app);
coursesRoute(app);
disciplinesRoute(app);
registrationsRoute(app);
coursesDisciplinesRoute(app);

module.exports = app;
