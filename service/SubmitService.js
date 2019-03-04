'use strict';
var db = require('../models/db');
var logger = require('../utils/logger')(__filename);

/**
 * adds a list of answers to survey
 *
 * surveyId String the name of the survey these answers correspond to
 * answers List a list of 1's and 0's that represent Y/N answers to each question
 * no response value expected for this operation
 **/
exports.submitAnswers = function(surveyId, answers) {
  return new Promise((resolve, reject) => {
    db.get(surveyId, (err, val) => {
      if(!err && val) {
        //each id is the question number
        let ids = Object.keys(answers);
        for (let id of ids) {//for each question on that survey that has corresponding number
          if(val.questions[id]) { // if this survey has corresponding question at that number, otherwise ignore
            if(!val.questions[id].answers) { // if that question does not have any answers yet
              val.questions[id]['answers'] = [];
            }
            val.questions[id].answers.push(answers[id]); // add anonymous answer to that question
          } else {
            logger.warn("Survey id " + surveyId + " does not have a question " + id);
          }
        }
        db.set(surveyId, val); // updating node cache
        resolve();
      }
      if(err) {
        logger.error("Error saving answers to survey id " + surveyId + "with error: " + err);
        reject();
      }
      if(!err && !val) {
        logger.error("Could not find survey id " + surveyId);
        reject('not found');
      }
    });
  });
}

