// Main Controller
angular.module('adminDashboard.controllers').controller('MainController', function($scope) {
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
