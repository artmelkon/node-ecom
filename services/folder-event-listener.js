const jsonfile = require('jsonfile');
const chokidar = require('chokidar');
const getDb = require('../utils/mongo-launcher').getDb;

const watcher = chokidar.watch('./woo-order', {
  persistent: true,
  ignoreInitial: false
});

function eventWatcher() {
  watcher
    .on('add', path => {
      console.log(`This file: ${path} was added`);
      let fileExt = path.split('.').pop();
      if (fileExt == 'json') {
        jsonfile.readFile(path)
        .then( data => {
          const db = getDb();
          for(var i in data) {
            console.dir(data[i]);
            db.collection('orders').insertOne(data[i])
          }
          console.log(data[1])
          return;
        })
        .catch(err => console.log(err));
      }
    });
}

module.exports = eventWatcher;
