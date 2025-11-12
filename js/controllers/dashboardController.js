// Dashboard Controller
hrisApp.controller('DashboardController', ['$scope', 'AuthService', function($scope, AuthService) {
    $scope.user = AuthService.getUser();

    // Dashboard data and functions
    $scope.dashboardData = {
        totalEmployees: 150,
        attendanceRate: 53,
        newMessages: 44,
        pendingTasks: 65
    };

    // Initialize dashboard
    $scope.init = function() {
        // Load dashboard data
        console.log('Dashboard initialized for user:', $scope.user);
    };

    // Call init when controller loads
    $scope.init();
}]);
