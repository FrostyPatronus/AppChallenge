

(function() {
    var app = angular.module('ClassroomModule', ['gridster']);

    app.controller('ClassroomController', ["$scope", function($scope){
        
        $scope.items = [
            { 
                sizeX: 2, 
                sizeY: 1, 
                row: 0, 
                col: 0,
                name: "Timothy"
            },
            { 
                sizeX: 2, 
                sizeY: 2, 
                row: 0, 
                col: 2,
                name: "Test"
            }
        ];

        $scope.addTable = function(){
            $scope.tables.push({
                name: "Hello"
            });
        };

    }]);

    app.directive('table', function(){
        return {
            restrict: 'E',
            templateUrl: 'html/table.html'
        };
    });
})();


