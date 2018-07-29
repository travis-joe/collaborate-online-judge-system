const express = require('express');
const app = express();
const path = require('path');

const restRouter = require('./routes/rest');
const indexRouter = require("./routes/index");

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/coj', { useNewUrlParser: true });

global.log = console.log.bind(this);

app.use("/api/v1", restRouter);


app.use(express.static(path.join(__dirname, '../public')));
app.use("/", indexRouter);
app.listen(3000, function () {
  log('server started...')
});
