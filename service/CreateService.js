'use strict';
var db = require('../models/db');
var uuidv4 = require('uuid/v4');
var logger = require('../utils/logger')(__filename);
/**
 * Create new survey
 *
 * survey Survey an Object that contains the name of the survery, and a list of survey questions
 * no response value expected for this operation
 **/

exports.createSurvey = function(survey) {
  return new Promise((resolve, reject) => {
    survey["id"] = uuidv4();
    logger.info("set unique Id: " + survey.id + " for survey: " + survey.name);
    db.set(survey.id, survey, (err, success) => {
      if(!err && success) {
        //successfully added survey to node cache
        resolve({id: survey.id});
      }
      //error adding survey to node cache
      if(err) {
        logger.error("Error saving survey id: " + survey.id + " to node cache: " + err);
        reject();
      }
      
    }); 
  });
}

