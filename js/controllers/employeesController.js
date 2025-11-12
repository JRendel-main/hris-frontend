// Employees Controller - MVC Pattern
angular.module('adminDashboard.controllers').controller('EmployeesController', function($scope) {
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
