angular.module('iLink')
  .factory('HomepageService', ['$http', '$location', function ($http, $location) {
    
    // Get base URL based on browser location
    const baseApiUrl = $location.absUrl()+'api';

  /**
   * savePhoneNumbers
   * @param {object} data
   * @param {object} done callback
   */
    this.savePhoneNumbers = (data, done) => {
      const saveUrl = `${baseApiUrl}/saveNumbers`;
      const req = {
        method: 'POST',
        url: saveUrl,
        data
      };

      $http(req).then((response) => {
        done(response);
      }, (err) => {
        done(err);
      });
    };

  /**
   * loadPhoneNumberIds
   * @param {object} data
   * @param {object} done callback
   */
    this.loadPhoneNumberIds = (done) => {
        const getUrl = `${baseApiUrl}/getNumberIds`;
        const req = {
          method: 'GET',
          url: getUrl
        };
  
        $http(req).then((response) => {
            done(response);
        }, (err) => {
            done(err);
        });
      };

  /**
   * getPhoneNumber
   * @param {object} entryId
   * @param {object} done callback
   */
  this.getPhoneNumbers = (entryId, done) => {
    const getUrl = `${baseApiUrl}/getNumbers/${entryId}`;
    const req = {
      method: 'GET',
      url: getUrl
    };

    $http(req).then((response) => {
        done(response);
    }, (err) => {
        done(err);
    });
  };

  /**
   * updatePhoneNumbers
   * @param {object} entryId
   * @param {object} done callback
   */
  this.updatePhoneNumbers = (updateData, done) => {
    const getUrl = `${baseApiUrl}/updatePhoneNumbers/${updateData.entryId}`;
    const req = {
      method: 'PUT',
      url: getUrl,
      data: updateData.data
    };

    $http(req).then((response) => {
        done(response);
    }, (err) => {
        done(err);
    });
  };

    return this;
  }]);
