'use strict';
var db = require('../models/db');
var logger = require('../utils/logger')(__filename);
/**
 * gets a list of all surveys and all corresponding answers
 *
 * returns List
 **/
exports.getAllResults = function() {
  return new Promise(function(resolve, reject) {
    const keys = db.keys();
    let res = [];
    logger.info("getting all surveys");
    //using multiple get function to retrieve all surveys from node cache
    db.mget(keys, (err, vals) => {
      if(!err && vals) {
        for (let k of keys) {
          res.push(vals[k]);
        }
        // console.log(re);
        resolve(res);
      }
      if(err) {
        logger.error("Error retrieving all surveys: " + err);
        reject();
      } 
      if(!err && !vals) {
        logger.error("Could not find any surveys");
        reject('not found');
      }
    });
  });
}


/**
 * gets a list of all the results from a particular survey
 *
 * surveyId String the name of the survey
 * returns Survey
 **/
exports.getResults = function(surveyId) {
  return new Promise(function(resolve, reject) {
    db.get(surveyId, (err, val) => {
      if(!err && val) {
        resolve(val);
      }
      if(err) {
        logger.error("Error retrieving survey id: " + surveyId + " : " + err);
        reject();
      }
      if(!err && !val) {
        logger.error("Could not find survey id " + surveyId);
        reject('not found');
      }
    });
  });
}

