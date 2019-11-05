var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Barber'});
});

/* GET about page. */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'Barber', name: 'About us'});
});

/* GET service page. */
router.get('/service', function (req, res, next) {
  res.render('service', { title: 'Barber', name: 'Services'});
});

/* GET blog page. */
router.get('/blog', function (req, res, next) {
  res.render('blog', { title: 'Barber', name: 'Blog'});
});

/* GET single blog page. */
router.get('/single-blog', function (req, res, next) {
  res.render('single-blog', { title: 'Barber', name: 'Single Blog'});
});

/* GET element page. */
router.get('/elements', function (req, res, next) {
  res.render('elements', { title: 'Barber', name: 'Elements'});
});

/* GET service page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Barber', name: 'Contact Us'});
});

module.exports = router;
