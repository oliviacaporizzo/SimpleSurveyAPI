'use strict';

var utils = require('../utils/writer.js');
var Submit = require('../service/SubmitService');

module.exports.submitAnswers = function submitAnswers (req, res, next) {
  var surveyName = req.swagger.params['surveyName'].value;
  var answers = req.swagger.params['answers'].value;
  Submit.submitAnswers(surveyName,answers)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      if(response == 'not found') {
        utils.writeJson(res, '', 404);
      }
      else {
        utils.writeJson(res, response, 500);
      }
    });
};
