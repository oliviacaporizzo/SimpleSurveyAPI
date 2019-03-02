'use strict';

var utils = require('../utils/writer.js');
var Create = require('../service/CreateService');

module.exports.createSurvey = function createSurvey (req, res, next) {
  var survey = req.swagger.params['survey'].value;
  Create.createSurvey(survey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
