'use strict';


/**
 * gets a list of all surveys and all corresponding answers
 *
 * returns List
 **/
exports.getAllResults = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
}, {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * gets a list of all the results from a particular survey
 *
 * surveyName String the name of the survey
 * returns Survey
 **/
exports.getResults = function(surveyName) {
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

