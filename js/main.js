

(function() {
    var app = angular.module('ClassroomModule', ['gridster']);

    app.controller('ClassroomController', ["$scope", function($scope){
        
        $scope.options = {
            floating: false,
            columns: 15,
            minRows: 6,

            swapping: true,
            margins: [15, 20],
            outerMargin: true

        };

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


