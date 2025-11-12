// Employee Model - Data Structure and Validation
function Employee(data) {
    this.id = data.id || null;
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.email = data.email || '';
    this.department = data.department || '';
    this.position = data.position || '';
    this.salary = data.salary || 0;
    this.status = data.status || 'active';
    this.hireDate = data.hireDate || '';
    this.phone = data.phone || '';
}

// Get default data for forms
Employee.getDefaultData = function() {
    return {
        firstName: '',
        lastName: '',
        email: '',
        department: '',
        position: '',
        salary: 0,
        phone: ''
    };
};

// Validate employee data
Employee.prototype.validate = function() {
    var errors = [];

    if (!this.firstName.trim()) {
        errors.push('First name is required');
    }

    if (!this.lastName.trim()) {
        errors.push('Last name is required');
    }

    if (!this.email.trim()) {
        errors.push('Email is required');
    } else if (!this.isValidEmail(this.email)) {
        errors.push('Invalid email format');
    }

    if (this.salary < 0) {
        errors.push('Salary cannot be negative');
    }

    return errors;
};

// Email validation helper
Employee.prototype.isValidEmail = function(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Get full name
Employee.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
};

// Get display status
Employee.prototype.getStatusDisplay = function() {
    var statusMap = {
        'active': 'Active',
        'inactive': 'Inactive',
        'on_leave': 'On Leave',
        'terminated': 'Terminated'
    };
    return statusMap[this.status] || 'Unknown';
};

// Check if employee is active
Employee.prototype.isActive = function() {
    return this.status === 'active';
};

// Make Employee globally available for backward compatibility
window.Employee = Employee;
