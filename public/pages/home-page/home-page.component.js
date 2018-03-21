angular.module('homePage')
.component('homePage', {
    templateUrl: 'pages/home-page/home-page.template.html',
    controller: function HomePageController($scope, $window) {
        this.phoneNumbers = [];
        this.phoneNumbersData = [];
        this.currentPhoneNumber = [];

        /**
         * GenerateNumbers
         */
        this.generateNumbers = () => {
            // Instantiate an empty array and define the number of random phone numbers we need
            const randomNumbers = [];
            const limit = 100;
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
            
            // Return true if random numbers are up to number expected and false otherwise
            return randomNumbers.length === limit;
        }

        /**
         * GetPhoneNumbers
         */
        this.getPhoneNumbers = () => {
            return this.phoneNumbers;
        }

        /**
         * sortPhoneNumbers
         * @param {order} (optional) can be specified as 'desc'
         */
        this.sortPhoneNumbers = (order) => {
            return args.sort((obj1, obj2) => {
                return (order === 'desc') ? obj2 - obj1 : obj1 - obj2;
            });
        }

        /**
         * savePhoneNumbers
         * 
         */
        this.savePhoneNumbers = () => {
        }

        /**
         * loadPhoneNumbers
         * 
         */
        this.loadPhoneNumbers = () => {
        }
    }
})
