'use strict';

const { createLogger, format, transports } = require('winston');
const path = require('path');

const getLogger = (name) => {
  return createLogger({
    level: 'debug',
    format: format.combine(
        // Use this function to create a label for additional text to display
        format.label({ label: path.basename(name) }),
        format.colorize(),
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss SSS' }),
        format.printf(
          // We display the label text between square brackets using ${info.label} on the next line
          info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
        )
      ),
    transports: [new transports.Console()]
});
}

module.exports = getLogger;