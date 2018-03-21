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
   * getPhoneNumbers
   * @param {object} data
   * @param {object} done callback
   */
    this.getPhoneNumbers = (data, done) => {
        const getUrl = `${baseApiUrl}/getNumbers`;
        const req = {
          method: 'GET',
          url: getUrl,
          data
        };
  
        $http(req).then((response) => {
            done(response);
        }, (err) => {
            done(err);
        });
      };

    return this;
  }]);
