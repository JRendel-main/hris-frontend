// Dashboard Controller - MVC Pattern
angular.module('adminDashboard.controllers').controller('DashboardController', function($scope) {
    // Initialize page metadata
    $scope.pageTitle = 'HR Dashboard';
    $scope.breadcrumb = ['Home', 'Dashboard'];

    // Load dashboard data from services
    function loadDashboardData() {
        try {
            // Get stats from HR Service
            var dashboardStats = HRService.getDashboardStats();
            $scope.stats = {
                totalEmployees: dashboardStats.totalEmployees,
                activeEmployees: dashboardStats.activeEmployees,
                onLeave: dashboardStats.onLeave,
                newHires: dashboardStats.newHires
            };

            // Get recent activities (mock data for now)
            $scope.recentActivities = [
                { employee: 'John Doe', action: 'Checked In', time: '09:00 AM', status: 'present' },
                { employee: 'Jane Smith', action: 'Leave Request', time: '08:30 AM', status: 'pending' },
                { employee: 'Bob Johnson', action: 'Checked Out', time: '06:00 PM', status: 'completed' },
                { employee: 'Alice Brown', action: 'On Leave', time: 'Today', status: 'on_leave' }
            ];

            // Chart data for employee headcount
            $scope.chartData = {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Employee Headcount',
                    data: [110, 115, 118, 120, 122, 125],
                    backgroundColor: 'rgba(60, 141, 188, 0.3)',
                    borderColor: 'rgba(60, 141, 188, 1)',
                    borderWidth: 1
                }]
            };

            // Upcoming HR events
            $scope.upcomingEvents = [
                { title: 'Performance Reviews', date: '2025-01-20', type: 'review' },
                { title: 'Team Building Event', date: '2025-01-25', type: 'event' },
                { title: 'New Employee Orientation', date: '2025-01-28', type: 'training' }
            ];

        } catch (error) {
            console.error('Error loading dashboard data:', error);
            // Fallback to default data
            $scope.stats = {
                totalEmployees: 0,
                activeEmployees: 0,
                onLeave: 0,
                newHires: 0
            };
        }
    }

    // Initialize dashboard
    loadDashboardData();
});
