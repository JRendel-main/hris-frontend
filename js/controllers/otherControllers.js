// Departments Controller
angular.module('adminDashboard.controllers').controller('DepartmentsController', function($scope) {
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
angular.module('adminDashboard.controllers').controller('AttendanceController', function($scope) {
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
angular.module('adminDashboard.controllers').controller('LeaveController', function($scope) {
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
angular.module('adminDashboard.controllers').controller('PayrollController', function($scope) {
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
angular.module('adminDashboard.controllers').controller('RecruitmentController', function($scope) {
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

// Reports Controller
angular.module('adminDashboard.controllers').controller('ReportsController', function($scope) {
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
angular.module('adminDashboard.controllers').controller('SettingsController', function($scope, $location) {
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

// Users Controller
angular.module('adminDashboard.controllers').controller('UsersController', function($scope) {
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
angular.module('adminDashboard.controllers').controller('ProductsController', function($scope) {
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
