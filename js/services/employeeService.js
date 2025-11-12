// Employee Service - CRUD Operations for Employees
angular.module('adminDashboard.services').factory('EmployeeService', function() {
    var service = {};
    var employees = [];
    var nextId = 1;

    // Initialize with mock data
    function initializeMockData() {
        if (employees.length === 0) {
            employees = [
                {
                    id: 1,
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@company.com',
                    department: 'IT',
                    position: 'Software Developer',
                    salary: 75000,
                    status: 'active',
                    hireDate: '2023-01-15',
                    phone: '+1-555-0101'
                },
                {
                    id: 2,
                    firstName: 'Jane',
                    lastName: 'Smith',
                    email: 'jane.smith@company.com',
                    department: 'HR',
                    position: 'HR Manager',
                    salary: 65000,
                    status: 'active',
                    hireDate: '2022-06-10',
                    phone: '+1-555-0102'
                },
                {
                    id: 3,
                    firstName: 'Bob',
                    lastName: 'Johnson',
                    email: 'bob.johnson@company.com',
                    department: 'Finance',
                    position: 'Accountant',
                    salary: 55000,
                    status: 'active',
                    hireDate: '2023-03-20',
                    phone: '+1-555-0103'
                },
                {
                    id: 4,
                    firstName: 'Alice',
                    lastName: 'Brown',
                    email: 'alice.brown@company.com',
                    department: 'Marketing',
                    position: 'Marketing Specialist',
                    salary: 50000,
                    status: 'on_leave',
                    hireDate: '2023-08-05',
                    phone: '+1-555-0104'
                },
                {
                    id: 5,
                    firstName: 'Charlie',
                    lastName: 'Wilson',
                    email: 'charlie.wilson@company.com',
                    department: 'Operations',
                    position: 'Operations Manager',
                    salary: 70000,
                    status: 'active',
                    hireDate: '2021-11-12',
                    phone: '+1-555-0105'
                }
            ];
            nextId = 6;
        }
    }

    // Get all employees
    service.getAllEmployees = function() {
        initializeMockData();
        return employees;
    };

    // Get employee by ID
    service.getEmployeeById = function(id) {
        initializeMockData();
        return employees.find(function(emp) {
            return emp.id === id;
        });
    };

    // Add new employee
    service.addEmployee = function(employeeData) {
        initializeMockData();

        // Validate required fields
        if (!employeeData.firstName || !employeeData.lastName || !employeeData.email) {
            throw new Error('First name, last name, and email are required');
        }

        // Check for duplicate email
        var existingEmployee = employees.find(function(emp) {
            return emp.email === employeeData.email;
        });

        if (existingEmployee) {
            throw new Error('An employee with this email already exists');
        }

        // Create new employee
        var newEmployee = {
            id: nextId++,
            firstName: employeeData.firstName,
            lastName: employeeData.lastName,
            email: employeeData.email,
            department: employeeData.department || 'General',
            position: employeeData.position || 'Employee',
            salary: employeeData.salary || 0,
            status: 'active',
            hireDate: new Date().toISOString().split('T')[0],
            phone: employeeData.phone || ''
        };

        employees.push(newEmployee);
        return newEmployee;
    };

    // Update employee
    service.updateEmployee = function(id, employeeData) {
        initializeMockData();
        var employee = service.getEmployeeById(id);

        if (!employee) {
            throw new Error('Employee not found');
        }

        // Update fields
        Object.keys(employeeData).forEach(function(key) {
            if (employeeData[key] !== undefined) {
                employee[key] = employeeData[key];
            }
        });

        return employee;
    };

    // Delete employee
    service.deleteEmployee = function(id) {
        initializeMockData();
        var index = employees.findIndex(function(emp) {
            return emp.id === id;
        });

        if (index === -1) {
            throw new Error('Employee not found');
        }

        employees.splice(index, 1);
        return true;
    };

    // Get employees by department
    service.getEmployeesByDepartment = function(department) {
        initializeMockData();
        return employees.filter(function(emp) {
            return emp.department === department;
        });
    };

    // Get employees by status
    service.getEmployeesByStatus = function(status) {
        initializeMockData();
        return employees.filter(function(emp) {
            return emp.status === status;
        });
    };

    return service;
});

// Make EmployeeService globally available for backward compatibility
window.EmployeeService = {
    getAllEmployees: function() {
        return [
            {
                id: 1,
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@company.com',
                department: 'IT',
                position: 'Software Developer',
                salary: 75000,
                status: 'active',
                hireDate: '2023-01-15',
                phone: '+1-555-0101'
            },
            {
                id: 2,
                firstName: 'Jane',
                lastName: 'Smith',
                email: 'jane.smith@company.com',
                department: 'HR',
                position: 'HR Manager',
                salary: 65000,
                status: 'active',
                hireDate: '2022-06-10',
                phone: '+1-555-0102'
            }
        ];
    },

    addEmployee: function(data) {
        return {
            id: Date.now(),
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            department: data.department || 'General',
            position: data.position || 'Employee',
            salary: data.salary || 0,
            status: 'active',
            hireDate: new Date().toISOString().split('T')[0],
            phone: data.phone || ''
        };
    },

    deleteEmployee: function(id) {
        return true;
    }
};
