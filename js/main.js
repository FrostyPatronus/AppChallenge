(function() {
    var app = angular.module('ClassroomModule', ['gridster']);

    app.controller('ClassroomController', ["$scope", function($scope){
        $scope.editMode = false;

        $scope.$watch('editMode', function(newValue, oldValue) {
            $(function(){
                if (newValue) {
                    $(".table-handle").css("cursor", "all-scroll");
                } else {
                    $(".table").css("cursor", "pointer");
                }
            });
        });

        $scope.options = {
            floating: false,
            columns: 14,
            minRows: 5,

            resizable: {
                enabled: false
            },

            draggable: {
                enabled: false,
                handle: ".table-handle"
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

        $scope.increment = function(table) {
            table.points += 1;
        };
    }]);

    app.directive('table', function(){
        return {
            restrict: 'E',
            templateUrl: 'html/table.html',

        };
    });
})();


