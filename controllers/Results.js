'use strict';

var utils = require('../utils/writer.js');
var Results = require('../service/ResultsService');
var logger = require('../utils/logger')(__filename);

module.exports.getAllResults = function getAllResults (req, res, next) {
  Results.getAllResults()
    .then(function (response) {
      logger.info("Succesfully got all surveys from node cache");
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

module.exports.getResults = function getResults (req, res, next) {
  var surveyId = req.swagger.params['surveyId'].value;
  Results.getResults(surveyId)
    .then(function (response) {
      logger.info("Successfully got results for survey with Id: " + surveyId);
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
