// Admin Dashboard AngularJS Application
var adminDashboard = angular.module('adminDashboard', ['ngRoute']);

// Configure routes
adminDashboard.config(function($routeProvider) {
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

// Main Controller
adminDashboard.controller('MainController', function($scope) {
    $scope.user = {
        name: 'Alexander Pierce',
        email: 'admin@example.com',
        avatar: 'img/user2-160x160.jpg'
    };

    $scope.notifications = [
        { message: '5 new members joined today', type: 'info' },
        { message: 'Server maintenance scheduled', type: 'warning' },
        { message: 'New product added to inventory', type: 'success' }
    ];

    $scope.messages = [
        { from: 'Support Team', message: 'Why not buy a new awesome theme?', time: '5 mins' },
        { from: 'Sales Team', message: 'Check out our new pricing plans', time: '10 mins' },
        { from: 'Marketing', message: 'New campaign results are in', time: '30 mins' }
    ];
});

// Dashboard Controller - MVC Pattern
adminDashboard.controller('DashboardController', function($scope) {
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

// Users Controller
adminDashboard.controller('UsersController', function($scope) {
    $scope.pageTitle = 'Users';
    $scope.breadcrumb = ['Home', 'Users'];

    $scope.users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'inactive' },
        { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Moderator', status: 'active' },
        { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', status: 'active' }
    ];

    $scope.deleteUser = function(user) {
        if (confirm('Are you sure you want to delete this user?')) {
            var index = $scope.users.indexOf(user);
            $scope.users.splice(index, 1);
        }
    };
});

// Products Controller
adminDashboard.controller('ProductsController', function($scope) {
    $scope.pageTitle = 'Products';
    $scope.breadcrumb = ['Home', 'Products'];

    $scope.products = [
        { id: 1, name: 'Laptop', category: 'Electronics', price: '$999.99', stock: 25, status: 'active' },
        { id: 2, name: 'Mouse', category: 'Accessories', price: '$29.99', stock: 150, status: 'active' },
        { id: 3, name: 'Keyboard', category: 'Accessories', price: '$79.99', stock: 75, status: 'active' },
        { id: 4, name: 'Monitor', category: 'Electronics', price: '$299.99', stock: 12, status: 'low_stock' },
        { id: 5, name: 'Headphones', category: 'Audio', price: '$149.99', stock: 0, status: 'out_of_stock' }
    ];

    $scope.getStatusClass = function(status) {
        switch(status) {
            case 'active': return 'label-success';
            case 'low_stock': return 'label-warning';
            case 'out_of_stock': return 'label-danger';
            default: return 'label-default';
        }
    };
});

// Reports Controller
adminDashboard.controller('ReportsController', function($scope) {
    $scope.pageTitle = 'HR Reports';
    $scope.breadcrumb = ['Home', 'Reports'];

    $scope.reports = [
        { name: 'Employee Headcount Report', period: 'Monthly', generated: '2025-01-15', downloadUrl: '#' },
        { name: 'Attendance Summary Report', period: 'Weekly', generated: '2025-01-08', downloadUrl: '#' },
        { name: 'Payroll Report', period: 'Monthly', generated: '2025-01-14', downloadUrl: '#' },
        { name: 'Leave Balance Report', period: 'Quarterly', generated: '2024-12-31', downloadUrl: '#' },
        { name: 'Recruitment Analytics', period: 'Monthly', generated: '2025-01-10', downloadUrl: '#' },
        { name: 'Employee Performance Report', period: 'Quarterly', generated: '2024-12-31', downloadUrl: '#' }
    ];
});

// Settings Controller
adminDashboard.controller('SettingsController', function($scope, $location) {
    var path = $location.path();
    if (path.includes('general')) {
        $scope.pageTitle = 'General Settings';
        $scope.breadcrumb = ['Home', 'Settings', 'General'];
    } else if (path.includes('security')) {
        $scope.pageTitle = 'Security Settings';
        $scope.breadcrumb = ['Home', 'Settings', 'Security'];
    }

    $scope.settings = {
        siteName: 'Admin Dashboard',
        siteDescription: 'A powerful admin dashboard',
        emailNotifications: true,
        twoFactorAuth: false,
        sessionTimeout: 30
    };

    $scope.saveSettings = function() {
        alert('Settings saved successfully!');
    };
});

// Employees Controller - MVC Pattern
adminDashboard.controller('EmployeesController', function($scope) {
    // Initialize page metadata
    $scope.pageTitle = 'Employees';
    $scope.breadcrumb = ['Home', 'Employees'];

    // Form data for new employee
    $scope.newEmployee = Employee.getDefaultData();
    $scope.showAddForm = false;

    // Load employees from service
    function loadEmployees() {
        try {
            $scope.employees = EmployeeService.getAllEmployees();
            $scope.employeeCount = $scope.employees.length;
        } catch (error) {
            console.error('Error loading employees:', error);
            $scope.employees = [];
            $scope.employeeCount = 0;
        }
    }

    // Add new employee
    $scope.addEmployee = function() {
        try {
            var employee = EmployeeService.addEmployee($scope.newEmployee);
            $scope.employees.push(employee);
            $scope.employeeCount = $scope.employees.length;
            $scope.newEmployee = Employee.getDefaultData();
            $scope.showAddForm = false;
            alert('Employee added successfully!');
        } catch (error) {
            alert('Error adding employee: ' + error.message);
        }
    };

    // Delete employee
    $scope.deleteEmployee = function(employee) {
        if (confirm('Are you sure you want to delete this employee?')) {
            try {
                EmployeeService.deleteEmployee(employee.id);
                var index = $scope.employees.findIndex(function(emp) {
                    return emp.id === employee.id;
                });
                if (index !== -1) {
                    $scope.employees.splice(index, 1);
                    $scope.employeeCount = $scope.employees.length;
                }
            } catch (error) {
                alert('Error deleting employee: ' + error.message);
            }
        }
    };

    // Toggle add form
    $scope.toggleAddForm = function() {
        $scope.showAddForm = !$scope.showAddForm;
        if (!$scope.showAddForm) {
            $scope.newEmployee = Employee.getDefaultData();
        }
    };

    // Initialize controller
    loadEmployees();
});

// Departments Controller
adminDashboard.controller('DepartmentsController', function($scope) {
    $scope.pageTitle = 'Departments';
    $scope.breadcrumb = ['Home', 'Departments'];

    $scope.departments = [
        { id: 1, name: 'Information Technology', head: 'John Doe', employees: 15, budget: 500000 },
        { id: 2, name: 'Human Resources', head: 'Jane Smith', employees: 8, budget: 200000 },
        { id: 3, name: 'Finance', head: 'Bob Johnson', employees: 12, budget: 350000 },
        { id: 4, name: 'Marketing', head: 'Alice Brown', employees: 10, budget: 250000 },
        { id: 5, name: 'Operations', head: 'Charlie Wilson', employees: 20, budget: 400000 }
    ];
});

// Attendance Controller
adminDashboard.controller('AttendanceController', function($scope) {
    $scope.pageTitle = 'Attendance';
    $scope.breadcrumb = ['Home', 'Attendance'];

    $scope.attendance = [
        { employee: 'John Doe', date: '2025-01-15', checkIn: '09:00', checkOut: '17:30', status: 'present', hours: 8.5 },
        { employee: 'Jane Smith', date: '2025-01-15', checkIn: '08:45', checkOut: '17:15', status: 'present', hours: 8.5 },
        { employee: 'Bob Johnson', date: '2025-01-15', checkIn: '09:15', checkOut: '18:00', status: 'present', hours: 8.75 },
        { employee: 'Alice Brown', date: '2025-01-15', checkIn: '-', checkOut: '-', status: 'absent', hours: 0 },
        { employee: 'Charlie Wilson', date: '2025-01-15', checkIn: '08:30', checkOut: '17:00', status: 'present', hours: 8.5 }
    ];

    $scope.getStatusClass = function(status) {
        switch(status) {
            case 'present': return 'label-success';
            case 'absent': return 'label-danger';
            case 'late': return 'label-warning';
            default: return 'label-default';
        }
    };
});

// Leave Controller
adminDashboard.controller('LeaveController', function($scope) {
    $scope.pageTitle = 'Leave Management';
    $scope.breadcrumb = ['Home', 'Leave Management'];

    $scope.leaveRequests = [
        { id: 1, employee: 'Alice Brown', type: 'Annual Leave', startDate: '2025-01-20', endDate: '2025-01-25', days: 6, status: 'approved', reason: 'Family vacation' },
        { id: 2, employee: 'John Doe', type: 'Sick Leave', startDate: '2025-01-18', endDate: '2025-01-18', days: 1, status: 'pending', reason: 'Medical appointment' },
        { id: 3, employee: 'Bob Johnson', type: 'Personal Leave', startDate: '2025-01-22', endDate: '2025-01-22', days: 1, status: 'approved', reason: 'Personal matters' },
        { id: 4, employee: 'Jane Smith', type: 'Maternity Leave', startDate: '2025-02-01', endDate: '2025-04-01', days: 60, status: 'approved', reason: 'Maternity leave' }
    ];

    $scope.approveLeave = function(request) {
        request.status = 'approved';
    };

    $scope.rejectLeave = function(request) {
        request.status = 'rejected';
    };
});

// Payroll Controller
adminDashboard.controller('PayrollController', function($scope) {
    $scope.pageTitle = 'Payroll';
    $scope.breadcrumb = ['Home', 'Payroll'];

    $scope.payroll = [
        { employee: 'John Doe', baseSalary: 75000, bonus: 5000, deductions: 1500, netPay: 78500, payPeriod: 'Jan 2025' },
        { employee: 'Jane Smith', baseSalary: 65000, bonus: 3000, deductions: 1200, netPay: 66800, payPeriod: 'Jan 2025' },
        { employee: 'Bob Johnson', baseSalary: 55000, bonus: 2000, deductions: 1000, netPay: 56000, payPeriod: 'Jan 2025' },
        { employee: 'Alice Brown', baseSalary: 50000, bonus: 0, deductions: 800, netPay: 49200, payPeriod: 'Jan 2025' },
        { employee: 'Charlie Wilson', baseSalary: 70000, bonus: 4000, deductions: 1400, netPay: 72600, payPeriod: 'Jan 2025' }
    ];
});

// Recruitment Controller
adminDashboard.controller('RecruitmentController', function($scope) {
    $scope.pageTitle = 'Recruitment';
    $scope.breadcrumb = ['Home', 'Recruitment'];

    $scope.jobPostings = [
        { id: 1, title: 'Senior Software Developer', department: 'IT', applicants: 25, status: 'open', postedDate: '2025-01-10' },
        { id: 2, title: 'HR Coordinator', department: 'HR', applicants: 15, status: 'open', postedDate: '2025-01-12' },
        { id: 3, title: 'Financial Analyst', department: 'Finance', applicants: 8, status: 'closed', postedDate: '2025-01-05' },
        { id: 4, title: 'Marketing Manager', department: 'Marketing', applicants: 12, status: 'open', postedDate: '2025-01-08' }
    ];

    $scope.applicants = [
        { name: 'Sarah Davis', position: 'Senior Software Developer', status: 'interviewed', appliedDate: '2025-01-11' },
        { name: 'Mike Johnson', position: 'HR Coordinator', status: 'shortlisted', appliedDate: '2025-01-13' },
        { name: 'Emily Chen', position: 'Financial Analyst', status: 'hired', appliedDate: '2025-01-06' },
        { name: 'David Wilson', position: 'Marketing Manager', status: 'pending', appliedDate: '2025-01-09' }
    ];
});

// Custom directive for status labels
adminDashboard.directive('statusLabel', function() {
    return {
        restrict: 'E',
        scope: {
            status: '@'
        },
        template: '<span class="label" ng-class="getStatusClass(status)">{{ status | uppercase }}</span>',
        controller: function($scope) {
            $scope.getStatusClass = function(status) {
                switch(status) {
                    case 'active': return 'label-success';
                    case 'inactive': return 'label-default';
                    case 'pending': return 'label-warning';
                    case 'approved': return 'label-success';
                    case 'rejected': return 'label-danger';
                    case 'on_leave': return 'label-info';
                    case 'present': return 'label-success';
                    case 'absent': return 'label-danger';
                    case 'late': return 'label-warning';
                    case 'completed': return 'label-info';
                    default: return 'label-default';
                }
            };
        }
    };
});
