(function() {
    var app = angular.module('ClassroomModule', ['gridster']);

    app.controller('ClassroomController', ["$scope", function($scope){
        $scope.options = {
            floating: false,
            columns: 15,
            minRows: 6,
            
            swapping: true
        };

        $scope.tables = [
            { 
                name: "Blane",
                points: 3
            },
            { 
                name: "Test",
                points: 3
            }
        ];

        $scope.addTable = function(){
            $scope.tables.push({
                name: "",
                points: 0
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


