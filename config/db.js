import bookshelf from 'bookshelf';
import knex from 'knex';
import config from './config';

const Bookshelf = bookshelf(knex(config));

Bookshelf.plugin('registry');
Bookshelf.plugin('pagination');

export default Bookshelf;


// Bookshelf.plugin('registry');
//
// export default Bookshelf;

// import knex from 'knex';
// import bookshelf from 'bookshelf';
// import config from './config';
//
// const Bookshelf = bookshelf(knex(config));
// Bookshelf.plugin('registry');
//
// export default Bookshelf;
