const express = require("express");
const router = express.Router();
const homeController =require("../Controller/homeController");
const serviceController = require("../Controller/serviceController");
const skillController = require("../Controller/skillController");
const contactController=require("../Controller/contactController");
router.get('/', homeController);
router.get('/service', serviceController);
router.get('/skill',skillController);
router.get('/contact',contactController);

   
  
module.exports =router
