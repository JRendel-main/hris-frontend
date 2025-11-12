// Routing Configuration
angular.module('adminDashboard').config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardController'
        })
        .when('/employees', {
            templateUrl: 'views/employees.html',
            controller: 'EmployeesController'
        })
        .when('/departments', {
            templateUrl: 'views/departments.html',
            controller: 'DepartmentsController'
        })
        .when('/attendance', {
            templateUrl: 'views/attendance.html',
            controller: 'AttendanceController'
        })
        .when('/leave', {
            templateUrl: 'views/leave.html',
            controller: 'LeaveController'
        })
        .when('/payroll', {
            templateUrl: 'views/payroll.html',
            controller: 'PayrollController'
        })
        .when('/recruitment', {
            templateUrl: 'views/recruitment.html',
            controller: 'RecruitmentController'
        })
        .when('/reports', {
            templateUrl: 'views/reports.html',
            controller: 'ReportsController'
        })
        .when('/settings/general', {
            templateUrl: 'views/settings-general.html',
            controller: 'SettingsController'
        })
        .when('/settings/security', {
            templateUrl: 'views/settings-security.html',
            controller: 'SettingsController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
