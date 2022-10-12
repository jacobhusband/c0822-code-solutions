const read = require('./read');
const create = require('./create');
const remove = require('./delete');
const update = require('./update');
const args = process.argv.slice(2);

if (args[0] === 'read') read();
else if (args[0] === 'create') create(args[1]);
else if (args[0] === 'remove') remove(args[1]);
else if (args[0] === 'update') update(args[1], args[2]);
else console.log('invalid');
