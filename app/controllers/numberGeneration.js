const fs = require('fs');
const dataPath = 'public/data/';

/**
 * getMinMax
* @param {object} phoneNumbers object http request object
* @return {object} object
 */
function getMinMax(phoneNumbers) {
    let min = phoneNumbers[0];
    let max = phoneNumbers[phoneNumbers.length-1];
    phoneNumbers.forEach(phoneNumber => {
        max = (phoneNumber > max) ? phoneNumber : max;
        min = (phoneNumber < min) ? phoneNumber : min;
    });

    return {min, max};
}

/**
 * savePhoneNumbers
* @param {object} req object http request object
* @param {object} res object http response object
* @return {object} object http response
 */
function savePhoneNumbers(req, res) {
    let phoneNumberObject = {};
    const timestamp = Date.now();
    const minMax = getMinMax(req.body);
    phoneNumberObject = {
        id: timestamp,
        totalNumber: req.body.length,
        created: Date(timestamp),
        minimum_number: minMax.min,
        maximum_number: minMax.max,
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
        if(!err) {
            files.forEach(file => {
                // Remove the file extention and push the id
                allFiles.push(file.slice(0, -5))
                });
                if (!err) {
                    return res.status(200).send(allFiles);
                } else {
                    return res.status(500).send({ message: err.message });
                }
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
    fs.readFile(`${dataPath}/${id}.json`, (err, data) => {
        if (!err) {
            return res.status(200).send(data);
        } else {
            return res.status(500).send({ message: err.message });
        }
    })
}

/**
 * updatePhoneNumbers
* @param {object} req object http request object
* @param {object} res object http response object
* @return {object} object http response
 */
function updatePhoneNumbers(req, res) {
    //Get a specific phone number
    const id = req.params.id;
    let phoneNumberData = fs.readFileSync(`${dataPath}/${id}.json`);
    phoneNumberData = JSON.parse(phoneNumberData);
    if(phoneNumberData) {
        phoneNumberData.data = req.body;
        phoneNumberData = JSON.stringify(phoneNumberData, null, 2);
        fs.writeFile(`${dataPath}/${id}.json`, phoneNumberData, (err) => {
            if (!err) {
                return res.status(200).send({ message: 'Phone numbers updated' });
            } else {
                return res.status(500).send({ message: err.message });
            }
        })
    }
}

/**
 * deletePhoneNumbers
* @param {object} req object http request object
* @param {object} res object http response object
* @return {object} object http response
 */
function deletePhoneNumbers(req, res) {
    //Get a specific phone number
    const id = req.params.id;
    fs.readFile(`${dataPath}/${id}.json`, (err, data) => {
        if (!err) {
            fs.unlinkSync(`${dataPath}/${id}.json`);
            return res.status(200).send(data);
        } else {
            return res.status(500).send({ message: err.message });
        }
    })
}

module.exports = {
    savePhoneNumbers,
    getPhoneNumberEntryIds,
    getPhoneNumbers,
    updatePhoneNumbers,
    deletePhoneNumbers
};
