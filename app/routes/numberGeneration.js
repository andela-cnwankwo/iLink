const savePhoneNumbers = require('../controllers/numberGeneration').savePhoneNumbers;
const getPhoneNumbers = require('../controllers/numberGeneration').getPhoneNumbers;

const numberGenerationRoute = (router) => {
    // save numbers route
    router.route('/saveNumbers')
            .post(savePhoneNumbers);
  
    // get numbers route
    router.route('/getNumbers')
            .get(getPhoneNumbers);
  };
  
  module.exports = numberGenerationRoute;