// Authentication Controllers
hrisApp.controller('MainController', ['$scope', 'AuthService', '$location', function($scope, AuthService, $location) {
    $scope.isAuthenticated = AuthService.isAuthenticated;
    $scope.user = AuthService.getUser;
    $scope.logout = function() {
        AuthService.logout();
        $location.path('/login');
    };
}]);

hrisApp.controller('LoginController', ['$scope', 'AuthService', '$location', function($scope, AuthService, $location) {
    $scope.credentials = {
        username: '',
        password: ''
    };

    $scope.error = '';

    $scope.login = function() {
        if ($scope.loginForm.$valid) {
            AuthService.login($scope.credentials)
                .then(function(data) {
                    $location.path('/dashboard');
                })
                .catch(function(error) {
                    $scope.error = error.data.message || 'Login failed';
                });
        }
    };

    $scope.goToRegister = function() {
        $location.path('/register');
    };
}]);

hrisApp.controller('RegisterController', ['$scope', 'AuthService', '$location', function($scope, AuthService, $location) {
    $scope.user = {
        name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    };

    $scope.error = '';
    $scope.success = '';

    $scope.register = function() {
        if ($scope.registerForm.$valid) {
            if ($scope.user.password !== $scope.user.confirmPassword) {
                $scope.error = 'Passwords do not match';
                return;
            }

            var userData = {
                name: $scope.user.name,
                email: $scope.user.email,
                username: $scope.user.username,
                password: $scope.user.password
            };

            AuthService.register(userData)
                .then(function(data) {
                    $scope.success = 'Registration successful! Please login.';
                    $scope.error = '';
                    // Clear form
                    $scope.user = {};
                    $scope.registerForm.$setPristine();
                    $scope.registerForm.$setUntouched();
                })
                .catch(function(error) {
                    $scope.error = error.data.message || 'Registration failed';
                    $scope.success = '';
                });
        }
    };

    $scope.goToLogin = function() {
        $location.path('/login');
    };
}]);
