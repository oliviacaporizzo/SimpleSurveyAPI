'use strict';
var db = require('../models/db');
/**
 * Create new survey
 *
 * survey Survey an Object that contains the name of the survery, and a list of survey questions
 * no response value expected for this operation
 **/

exports.createSurvey = function(survey) {
  return new Promise((resolve, reject) => {
    db.set(survey.name, survey, (err, success) => {
      if(!err && success) {
        resolve();
      }
      console.log(err);
      reject();
    }); 
  });
}

