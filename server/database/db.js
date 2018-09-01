const mongoose = require('mongoose');

let path = `mongodb://127.0.0.1/smile-db`;

mongoose.connect(path, {useNewUrlParser: true});

exports.connect = () => {
  let db = mongoose.connection;

  db.on('disconnected', () => {

    mongoose.connect(path, {useNewUrlParser: true});
  });

  db.on('error', err => {
    mongoose.connect(path, {useNewUrlParser: true});
  });

  db.once('open', () => {
    console.log('数据库连接成功')
  });
};




