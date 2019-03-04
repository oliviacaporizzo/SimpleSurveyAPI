'use strict';

var utils = require('../utils/writer.js');
var Submit = require('../service/SubmitService');
var logger = require('../utils/logger')(__filename);

module.exports.submitAnswers = function submitAnswers (req, res, next) {
  var surveyId = req.swagger.params['surveyId'].value;
  var answers = req.swagger.params['answers'].value;
  Submit.submitAnswers(surveyId,answers)
    .then(function (response) {
      logger.info("Successfully added answers to survey id: " + surveyId);
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
