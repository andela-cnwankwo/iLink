const savePhoneNumbers = require('../controllers/numberGeneration').savePhoneNumbers;
const getPhoneNumberEntryIds = require('../controllers/numberGeneration').getPhoneNumberEntryIds;
const getPhoneNumbers = require('../controllers/numberGeneration').getPhoneNumbers;
const updatePhoneNumbers = require('../controllers/numberGeneration').updatePhoneNumbers;

const numberGenerationRoute = (router) => {
    // save numbers route
    router.route('/saveNumbers')
            .post(savePhoneNumbers);
  
    // get numbers route
    router.route('/getNumberIds')
            .get(getPhoneNumberEntryIds);

    // get numbers route
    router.route('/getNumbers/:id')
            .get(getPhoneNumbers);

    // get numbers route
    router.route('/updatePhoneNumbers/:id')
            .put(updatePhoneNumbers);
  };
  
  module.exports = numberGenerationRoute;
