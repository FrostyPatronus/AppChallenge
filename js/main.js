function toggleTableStyle(editMode) {
    if (editMode) {
        $(".table").addClass("black-border");
        $(".table").css("cursor", "auto");
    } else {
        $(".table").css("cursor", "pointer");
        $(".table").removeClass("black-border");
    }
}

function changeShade(table, element) {
    parent = $(element);
    text = parent.find(".table-points");
    var shade = Math.abs(0 + (table.points * CONST.get("STEP")));

    var rgbString = "rgb(";

    if (table.points > 0) {
        rgbString += "0, ";
        rgbString += shade + ", ";
        rgbString += "0)";
    } else {
        rgbString += shade + ",";
        rgbString += "0, ";
        rgbString += "0)";
    }

    text.css("color", rgbString);
    parent.parent().css("border-color", rgbString);

}

(function() {
    var app = angular.module('ClassroomModule', ['gridster', 'ngAnimate']);

    app.controller('ClassroomController', ["$scope", function($scope){
        $scope.tableCount = 0;

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
                handles: ["s", "e", "se", "sw"]
            },

            draggable: {
                handle: ".table-handle"
            }
        };

        $scope.currentClass = "Volvo";

        $scope.classes = {
            "Volvo" : [{ 
                name: "John Doe",
                points: 0
            }],

            "Cream" : [{ 
                name: "John Doe",
                points: 0
            }]

        };

        $scope.changeCurrentClass = function(newVal) {
            $scope.tables = $scope.classes[newVal];
        };

        // Tables that will be shown up
        $scope.tables = $scope.classes[$scope.currentClass];

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

            $scope.tableCount = $scope.tables.length;

        };

    }]);

    app.directive('table', function(){
        return {
            restrict: 'E',
            templateUrl: 'html/table.html',

            link: function(scope, element, attrs) {
                scope.increment = function(table) {
                    table.points += 1;
                    changeShade(table, element);
                };

                scope.decrement = function(table) {
                    table.points -= 1;
                    changeShade(table, element);
                };

                toggleTableStyle(scope.$parent.editMode);

                scope.deleteTable = function(table) {

                    scope.$parent.tables.splice(
                        scope.$parent.tables.indexOf(table), 1);

                };
            }


        };
    });

    app.directive('selectOnFocus', function (){
        return {
            restrict: "A",
            link: function (scope, element){
                $(element).mouseup(function(event) {
                    event.preventDefault();
                });

                $(element).focus(function(event) {
                    $(element).select();
                });
            }
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


