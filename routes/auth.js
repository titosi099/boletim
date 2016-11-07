import jwt from 'jwt-simple';
import Users from '../models/Users';

export default (app) => {
  const cfg = app.config;
  app.post('/token', (req, res) => {
    if (req.body.email && req.body.password) {
      const email = req.body.email;
      const password = req.body.password;
      Users
      .where({ email })
      .fetch()
      .then((user) => {
        if (Users.forge().isPassword(user.toJSON().password, password)) {
          const payload = { id: user.id };
          res.json({ token: jwt.encode(payload, cfg.jwtSecret) });
        } else {
          res.sendStatus(401);
        }
      })
      .catch(() => {
        res.sendStatus(401);
      });
    } else {
      res.sendStatus(401);
    }
  });
};
