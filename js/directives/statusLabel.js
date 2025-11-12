// Status Label Directive - Reusable status display component
angular.module('adminDashboard.directives').directive('statusLabel', function() {
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
