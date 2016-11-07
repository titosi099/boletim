import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import db from './config/db';
import authorization from './auth';
import studentsRoute from './routes/students';
import usersRoute from './routes/users';
import attributesRoute from './routes/attributes';
import coursesRoute from './routes/courses';
import disciplinesRoute from './routes/disciplines';
import registrationsRoute from './routes/registrations';
import coursesDisciplinesRoute from './routes/coursesDisciplines';
import authRoute from './routes/auth';

const app = express();
app.config = config;
app.db = db;

app.set('port', 3000);
app.use(bodyParser.json());
const auth = authorization(app);
app.use(auth.initialize());
app.auth = auth;

studentsRoute(app);
usersRoute(app);
attributesRoute(app);
coursesRoute(app);
disciplinesRoute(app);
registrationsRoute(app);
coursesDisciplinesRoute(app);
authRoute(app);

module.exports = app;
