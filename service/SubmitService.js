'use strict';
var db = require('../models/db');

/**
 * adds a list of answers to survey
 *
 * surveyName String the name of the survey these answers correspond to
 * answers List a list of 1's and 0's that represent Y/N answers to each question
 * no response value expected for this operation
 **/
exports.submitAnswers = function(surveyName, answers) {
  return new Promise((resolve, reject) => {
    db.get(surveyName, (err, val) => {
      if(!err && val) {
        for (let a of answers) {
          for (let q of val.questions) {
            if(!q.answers) {
              q['answers'] = []
            }
            q.answers.push(a);
          }
        }
        db.set(surveyName, val);
        console.log(db.get(surveyName));
        resolve();
      }
      if(err) {
        reject();
      }
      reject('not found');
    });
  });
}

