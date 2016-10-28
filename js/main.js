(function() {
    var app = angular.module('ClassroomModule', ['gridster']);

    app.controller('ClassroomController', ["$scope", function($scope){
        $scope.editMode = false;

        $scope.options = {
            floating: false,
            columns: 14,
            minRows: 5,

            resizable: {
                enabled: false
            },

            draggable: {
                enabled: false
            }
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

        $scope.toggleEditMode = function(){
            $scope.options.resizable.enabled = $scope.editMode;
            $scope.options.draggable.enabled = $scope.editMode;
        };

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


