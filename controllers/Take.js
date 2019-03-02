'use strict';

var utils = require('../utils/writer.js');
var Take = require('../service/TakeService');

module.exports.takeSurvey = function takeSurvey (req, res, next) {
  var surveyName = req.swagger.params['surveyName'].value;
  Take.takeSurvey(surveyName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
