angular.module('homePage')
.component('homePage', {
    templateUrl: 'pages/home-page/home-page.template.html',
    controller: function HomePageController($http, HomepageService) {
        this.phoneNumbers = [];
        this.phoneNumbersData = [];
        this.currentPhoneNumber = [];
        this.sortOrder = 'desc';

        /**
         * GenerateNumbers
         */
        this.generateNumbers = () => {
            // Instantiate an empty array and define the number of random phone numbers we need
            const randomNumbers = [];
            const limit = 10;
            let i = 1;
            // generate random phone numbers of 9 digits up to the limit
            while (i < limit) {
                let numberLength = 100000000;
                let randomNumber = Math.random() * 900000000;
                randomNumber += numberLength;

                // Round up random number to a whole number
                randomNumber = Math.floor(randomNumber);
                randomNumbers.push(`0${randomNumber}`);
                i++;
            }
            this.phoneNumbers = randomNumbers;
            
            //Save generated numbers
            this.savePhoneNumbers();
        }

        /**
         * GetPhoneNumbers
         */
        this.getPhoneNumbers = (entryId) => {
          HomepageService.getPhoneNumbers(entryId, response => {
          });
        }

        /**
         * sortNumbers
         */
        this.sortNumbers = (entryId) => {
          this.sortOrder = (this.sortOrder === 'desc') ? 'asc' : 'desc';
          HomepageService.getPhoneNumbers(entryId, response => {
            const sortedNumbers = this.sortPhoneNumbers(response.data.data, this.sortOrder);
            const updateData = {
              entryId,
              data: sortedNumbers
            }
            this.updatePhoneNumbers(updateData);
          });
        }

        /**
         * sortPhoneNumbers
         * @param {order} (optional) can be specified as 'desc'
         */
        this.sortPhoneNumbers = (phoneNumbers, order) => {
            return phoneNumbers.sort((phoneNumber1, phoneNumber2) => {
                return (order === 'desc') ? phoneNumber2 - phoneNumber1 : phoneNumber1 - phoneNumber2;
            });
        }

        /**
         * savePhoneNumbers
         */
        this.savePhoneNumbers = () => {
            HomepageService.savePhoneNumbers(this.phoneNumbers, (response) => {
              // Load ids after saving
              this.loadPhoneNumberIds();
            });
        }

        /**
         * updatePhoneNumbers
         */
        this.updatePhoneNumbers = (updateData) => {
          HomepageService.updatePhoneNumbers(updateData, (response) => {
          });
      }

        /**
         * loadPhoneNumbers
         */
        this.loadPhoneNumberIds = () => {
            HomepageService.loadPhoneNumberIds(response => {
              this.phoneNumbersData = [];
              // Update phone numbers object
              response.data.forEach(entryId => {
                let entryDetail = {};
                entryDetail.id = entryId;
                entryDetail.date = Date(entryId);
                this.phoneNumbersData.push(entryDetail);
              })
            });
        }

        // Load already generated phone numbers
        this.loadPhoneNumberIds();

        return this;
    }
})
