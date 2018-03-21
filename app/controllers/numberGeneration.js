const fs = require('fs');
const dataPath = 'app/data/';
/**
 * savePhoneNumbers
* @param {object} req object http request object
* @param {object} res object http response object
* @return {object} object http response
 */
function savePhoneNumbers(req, res) {
    let phoneNumberObject = {};
    const timestamp = Date.now();
    phoneNumberObject = {
        id: timestamp,
        totalNumber: req.body.length,
        data: req.body
    }

    phoneNumberObject = JSON.stringify(phoneNumberObject, null, 2);
    // Save phone numbers
    fs.writeFile(`${dataPath}/${timestamp}.json`, phoneNumberObject, (err) => {
        if (!err) {
            return res.status(200).send({ message: 'Phone numbers saved' });
        } else {
            return res.status(500).send({ message: err.message });
        }
    })
}

/**
 * getPhoneNumbers
* @param {object} req object http request object
* @param {object} res object http response object
* @return {object} object http response
 */
function getPhoneNumberEntryIds(req, res) {
    let allFiles = [];
    fs.readdir(dataPath, (err, files) => {
        files.forEach(file => {
        // Remove the file extention and push the id
        allFiles.push(file.slice(0, -5))
        });
        if (!err) {
            return res.status(200).send(allFiles);
        } else {
            return res.status(500).send({ message: err.message });
        }
      })
}

/**
 * getPhoneNumber
* @param {object} req object http request object
* @param {object} res object http response object
* @return {object} object http response
 */
function getPhoneNumbers(req, res) {
    //Get a specific phone number
    const id = req.params.id;
}

module.exports = {
    savePhoneNumbers,
    getPhoneNumberEntryIds,
    getPhoneNumbers
};
