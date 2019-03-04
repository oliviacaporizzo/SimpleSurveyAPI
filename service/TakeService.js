'use strict';
var db = require('../models/db');
var logger = require('../utils/logger')(__filename);

/**
 * Gets all the questions associated with survey name
 *
 * surveyId String the name of the survey to be taken
 * returns Survey
 **/
exports.takeSurvey = function(surveyId) {
  return new Promise((resolve, reject) => {
    logger.info("Getting survey with id: " + surveyId);
    db.get(surveyId, (err, val) => {
      if(!err && val) {
        const qids = Object.keys(val.questions); //get all question numbers
        let res = {};
        for (let id of qids) {
            res[id] = val.questions[id].text; // response is an object whose keys are the question number and val is question text
        }
        resolve(res);
      }
      if(err) {
        logger.error("Could not get survey with id " + surveyId + " with error: " + err);
        reject();
      } 
      if(!err && !val) {
        logger.error("Could not find survey id " + surveyId);
        reject('not found');
      }
    });
  });
}

