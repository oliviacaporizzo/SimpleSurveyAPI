'use strict';

var utils = require('../utils/writer.js');
var Create = require('../service/CreateService');
var logger = require('../utils/logger')(__filename);

module.exports.createSurvey = function createSurvey (req, res, next) {
  var survey = req.swagger.params['survey'].value;
  Create.createSurvey(survey)
    .then(function (response) {
      logger.info("Successfully created survey");
      utils.writeJson(res, response, 201);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
};
