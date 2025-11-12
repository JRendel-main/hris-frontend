// API Service - HTTP Interceptor and API calls
hrisApp.factory('AuthInterceptor', ['$window', '$location', function($window, $location) {
    return {
        request: function(config) {
            var token = $window.localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = 'Bearer ' + token;
            }
            return config;
        },
        responseError: function(response) {
            if (response.status === 401) {
                // Token expired or invalid
                $window.localStorage.removeItem('token');
                $window.localStorage.removeItem('user');
                $location.path('/login');
            }
            return response;
        }
    };
}]);

// Generic API Service for future use
hrisApp.factory('ApiService', ['$http', function($http) {
    var apiService = {};

    var baseUrl = 'http://localhost:3000/api';

    apiService.get = function(endpoint) {
        return $http.get(baseUrl + endpoint);
    };

    apiService.post = function(endpoint, data) {
        return $http.post(baseUrl + endpoint, data);
    };

    apiService.put = function(endpoint, data) {
        return $http.put(baseUrl + endpoint, data);
    };

    apiService.delete = function(endpoint) {
        return $http.delete(baseUrl + endpoint);
    };

    return apiService;
}]);
