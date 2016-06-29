var config = {};

// LOCAL DB
// config.mongoUri = 'mongodb://localhost:27017/woma';

// AZURE DB
// config.mongoUri = 'mongodb://maurer:FC1gvPM1F2eYnzsWzJClpRG1unbacpytYV3VZbQvK3uB9FaUDZoDQPeKTXJYZlZisE4xlLICpAedSuG1v0patw==@maurer.documents.azure.com:10250/woma?ssl=true';

// MLab DB
config.mongoUri = 'mongodb://martin:bishop@ds032319.mlab.com:32319/setech-astronomy';

module.exports = config;