// Admin Dashboard AngularJS Application
var adminDashboard = angular.module('adminDashboard', [
    'ngRoute',
    'adminDashboard.controllers',
    'adminDashboard.services',
    'adminDashboard.directives'
]);

// Bootstrap the application
angular.element(document).ready(function() {
    angular.bootstrap(document, ['adminDashboard']);
});
