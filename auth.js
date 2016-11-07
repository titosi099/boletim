import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import Users from './models/Users';

export default (app) => {
  const cfg = app.config;
  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = cfg.jwtSecret;
  const strategy = new Strategy(opts, (payload, done) => {
    Users
    .where({ id: payload.id })
    .fetch()
    .then((user) => {
      if (user) {
        return done(null, {
          id: user.id,
          email: user.email,
        });
      }
      return done(null, false);
    })
    .catch(error => done(error, false));
  });
  passport.use(strategy);
  return {
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate('jwt', cfg.jwtSession),
  };
};
