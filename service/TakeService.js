'use strict';


/**
 * Gets all the questions associated with survey name
 *
 * surveyName String the name of the survey to be taken
 * returns Survey
 **/
exports.takeSurvey = function(surveyName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "questions" : [ {
    "answers" : [ 6, 6 ],
    "text" : "text",
    "id" : 0
  }, {
    "answers" : [ 6, 6 ],
    "text" : "text",
    "id" : 0
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

