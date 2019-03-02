'use strict';

var utils = require('../utils/writer.js');
var Results = require('../service/ResultsService');

module.exports.getAllResults = function getAllResults (req, res, next) {
  Results.getAllResults()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getResults = function getResults (req, res, next) {
  var surveyName = req.swagger.params['surveyName'].value;
  Results.getResults(surveyName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
