'use strict';
var db = require('../models/db');

/**
 * Gets all the questions associated with survey name
 *
 * surveyName String the name of the survey to be taken
 * returns Survey
 **/
exports.takeSurvey = function(surveyName) {
  return new Promise((resolve, reject) => {
    db.get(surveyName, (err, val) => {
      if(!err && val) {
        let qs = [];
        for (let q of val.questions) {
            qs.push({text:q.text, id:q.id});
        }
        resolve(qs);
      }
      if(err) {
        reject();
      }
      reject('not found');
    })
  });
}

