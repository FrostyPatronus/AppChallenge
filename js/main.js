function toggleTableStyle(editMode) {
    if (editMode) {
        $(".table-handle").css("cursor", "grabbing");
        $(".table").addClass("black-border");
    } else {
        $(".table").css("cursor", "pointer");
        $(".table").removeClass("black-border");
    }
}

function changeShade(points) {
    var element = $(".table-points");

    var shade = 0 + (points * 25);

    var rgbString = "rgb(";
    rgbString += "0, ";
    rgbString += shade + ", ";
    rgbString += "0)";

    element.css("color", rgbString);
}

(function() {
    var app = angular.module('ClassroomModule', ['gridster']);

    app.controller('ClassroomController', ["$scope", function($scope){
        // Determines if the app is in edit mode
        $scope.editMode = false;

        // Watches for changes in the scope value "editMode" and applies the new value to
        // the DOM
        $scope.$watch('editMode', function(newValue, oldValue) {
            toggleTableStyle(newValue);
        });

        // Options for the tables
        $scope.options = {
            floating: false,
            columns: 14,
            minRows: 5,

            pushing: false,
            swapping: true,

            resizable: {
                enabled: false,
                handles: ["s", "e", "ne", "se", "sw"]
            },

            draggable: {
                handle: ".table-handle"
            }
        };

        // Default tables
        $scope.tables = [
            { 
                name: "John Doe",
                points: 0
            }
        ];

        // What executes when you toggle the Edit Mode
        $scope.toggleEditMode = function(){
            $scope.options.resizable.enabled = $scope.editMode;
        };

        // What executes when you add a table
        $scope.addTable = function(){
            $scope.tables.push({
                name: "",
                points: 0
            });

            $(function(){
                toggleTableStyle($scope.editMode);
            });

        };

        $scope.increment = function(table) {
            table.points += 1;

            changeShade(table.points)
        };

        $scope.decrement = function(table) {
            table.points -= 1;
        };


    }]);

    app.directive('table', function(){
        return {
            restrict: 'E',
            templateUrl: 'html/table.html',

        };
    });

    app.directive('ngRightClick', function($parse) {
        return function(scope, element, attrs) {
            var fn = $parse(attrs.ngRightClick);
            element.bind('contextmenu', function(event) {
                scope.$apply(function() {
                    event.preventDefault();
                    fn(scope, {$event:event});
                });
            });
        };
    });

})();


