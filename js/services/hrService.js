// HR Service - Business Logic for HR Operations
angular.module('adminDashboard.services').factory('HRService', function() {
    var service = {};

    // Mock data for dashboard statistics
    service.getDashboardStats = function() {
        return {
            totalEmployees: 125,
            activeEmployees: 118,
            onLeave: 7,
            newHires: 3
        };
    };

    // Get employee statistics
    service.getEmployeeStats = function() {
        return {
            total: 125,
            active: 118,
            inactive: 7,
            onLeave: 7,
            departments: 5
        };
    };

    // Get attendance summary
    service.getAttendanceSummary = function(date) {
        return {
            present: 115,
            absent: 8,
            late: 2,
            total: 125
        };
    };

    // Get leave statistics
    service.getLeaveStats = function() {
        return {
            annualLeave: 45,
            sickLeave: 12,
            maternityLeave: 3,
            personalLeave: 8
        };
    };

    return service;
});

// Make HRService globally available for backward compatibility
window.HRService = {
    getDashboardStats: function() {
        return {
            totalEmployees: 125,
            activeEmployees: 118,
            onLeave: 7,
            newHires: 3
        };
    }
};
