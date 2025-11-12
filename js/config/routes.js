hrisApp.config(['$routeProvider', '$httpProvider', '$locationProvider', function($routeProvider, $httpProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/login', {
            templateUrl: './views/login.html',
            controller: 'LoginController'
        })
        .when('/register', {
            templateUrl: './views/register.html',
            controller: 'RegisterController'
        })
        .when('/dashboard', {
            templateUrl: './views/dashboard.html',
            controller: 'DashboardController',
            resolve: {
                auth: function(AuthService, $location) {
                    if (!AuthService.isAuthenticated()) {
                        $location.path('/login');
                    }
                }
            }
        })
        .when('/', {
            resolve: {
                redirect: function(AuthService, $location) {
                    if (AuthService.isAuthenticated()) {
                        $location.path('/dashboard');
                    } else {
                        $location.path('/login');
                    }
                }
            }
        })
        .otherwise({
            resolve: {
                redirect: function(AuthService, $location) {
                    if (AuthService.isAuthenticated()) {
                        $location.path('/dashboard');
                    } else {
                        $location.path('/login');
                    }
                }
            }
        });

    // Add JWT token to all requests
    $httpProvider.interceptors.push('AuthInterceptor');
}]);

hrisApp.run(['$rootScope', '$location', 'AuthService', function($rootScope, $location, AuthService) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        if (next.$$route && next.$$route.resolve && next.$$route.resolve.auth) {
            if (!AuthService.isAuthenticated()) {
                $location.path('/login');
            }
        }
    });
}]);
