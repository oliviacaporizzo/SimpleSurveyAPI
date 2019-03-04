'use strict';

var utils = require('../utils/writer.js');
var Take = require('../service/TakeService');
var logger = require('../utils/logger')(__filename);

module.exports.takeSurvey = function takeSurvey (req, res, next) {
  var surveyId = req.swagger.params['surveyId'].value;
  Take.takeSurvey(surveyId)
    .then(function (response) {
      logger.info("Succesfully got the questions for survey id " + surveyId);
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
