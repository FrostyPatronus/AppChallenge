// function makeDraggable(){
//     // Makes a div with class "draggable" draggable and resizable
//     // within a 30x30 grid
//     $(".draggable")
//         .draggable({
//             containment: "#canvas",
//             grid: [30, 30]
//         })
//         .resizable({
//             containment: "#canvas",
//             handles: "all",
//             grid: [30, 30]

//         });
// }

(function() {
    var app = angular.module('ClassroomModule', ['gridster']);

    app.controller('ClassroomController', ["$scope", function($scope){

        $scope.tables = [{name: "Hello"}, {name: "Hello"}];

        $scope.addTable = function(){
            $scope.tables.push({
                name: "Hello"
            });
        };

        $scope.items = [
          { sizeX: 2, sizeY: 1, row: 0, col: 0 },
          { sizeX: 2, sizeY: 2, row: 0, col: 2 },
          { sizeX: 1, sizeY: 1, row: 0, col: 4 },
          { sizeX: 1, sizeY: 1, row: 0, col: 5 },
          { sizeX: 2, sizeY: 1, row: 1, col: 0 },
          { sizeX: 1, sizeY: 1, row: 1, col: 4 },
          { sizeX: 1, sizeY: 2, row: 1, col: 5 },
          { sizeX: 1, sizeY: 1, row: 2, col: 0 },
          { sizeX: 2, sizeY: 1, row: 2, col: 1 },
          { sizeX: 1, sizeY: 1, row: 2, col: 3 },
          { sizeX: 1, sizeY: 1, row: 2, col: 4 }
        ];

    }]);

    app.directive('table', function(){
        return {
            restrict: 'E',
            templateUrl: 'html/table.html', 
            link: function(scope, element, attr){
                makeDraggable();
            }
        };
    });
})();


