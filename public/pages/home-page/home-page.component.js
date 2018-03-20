angular.module('homePage')
.component('homePage', {
    templateUrl: 'pages/home-page/home-page.template.html',
    controller: function HomePageController($scope) {
        this.page = "Home";
    }
})
