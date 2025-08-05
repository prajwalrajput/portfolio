const express = require('express');
const router = express.Router();
const Project = require('../models/project');

// Home
router.get('/', (req, res) => {
  res.render('home', { active: 'home' });
});

// About
router.get('/about', (req, res) => {
  res.render('about', { active: 'about' });
});

// Projects
router.get('/projects', async (req, res) => {
  const projects = await Project.find();
  res.render('projects', { active: 'projects', projects });

});

// Contact
router.get('/contact', (req, res) => {
  res.render('contact', { active: 'contact' });
});
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact form submitted:", name, email, message);
  // You can store this in MongoDB or send it via email using nodemailer
  res.redirect('/');
});

module.exports = router;
