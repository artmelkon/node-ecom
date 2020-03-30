const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const mongodb = require('mongodb');
const mongoConnect = require('./utils/mongo-launcher').mongoConnect;

const app = express();

// IMPORTS
const inputJsonRoutes   = require('./routes/input');
const outputJsonRoutes  = require('./routes/output');
const eventWatcher      = require('./services/folder-event-listener');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/input', inputJsonRoutes);
app.use(outputJsonRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: '404 Page'});
});

// eventWatcher listens whenever a new order deposited into woo-order folder
// to pars and insert into mongodb
eventWatcher();

// app.use('/add-product', (req, res, next) => {
//   res.send('<form action="/product" method="post"><input type="text" name="title"><input type="submit" value="Submit"></form>');
// });

// app.post('/product', (req, res, next) => {
//   console.log(req.body);
//   res.redirect('/');
// });

// app.use('/', (req, res, next) => {
//   res.send('<h1 style="text-align: center;">Hello from Express!</h1>')
// })


const port = process.env.port || 3000;

// mongoConnect(() => {
//   app.listen(port, () => console.log(`Node server is running on port: ${port}`));
// });

mongoConnect(port);