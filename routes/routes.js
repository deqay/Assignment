var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/homepage', { title: 'Home Page' });
});

router.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About Me' });
});

router.get('/projects', (req, res) => {
  res.render('pages/projects', { title: 'Projects' });
});

router.get('/services', ( res) => {
  res.render('pages/services', { title: 'Services' });
});
router.get('/contact', (req, res) => {
  res.render('pages/contact', { title: 'Contact Me' });
});

module.exports = router;
