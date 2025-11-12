// Authentication Service
hrisApp.factory('AuthService', ['$http', '$window', function($http, $window) {
    var authService = {};

    authService.register = function(userData) {
        return $http.post('http://localhost:3000/api/auth/register', userData)
            .then(function(response) {
                return response.data;
            });
    };

    authService.login = function(credentials) {
        return $http.post('http://localhost:3000/api/auth/login', credentials)
            .then(function(response) {
                if (response.data.token) {
                    $window.localStorage.setItem('token', response.data.token);
                    $window.localStorage.setItem('user', JSON.stringify(response.data.user));
                }
                return response.data;
            });
    };

    authService.logout = function() {
        $window.localStorage.removeItem('token');
        $window.localStorage.removeItem('user');
    };

    authService.isAuthenticated = function() {
        return !!$window.localStorage.getItem('token');
    };

    authService.getToken = function() {
        return $window.localStorage.getItem('token');
    };

    authService.getUser = function() {
        var user = $window.localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    };

    return authService;
}]);
