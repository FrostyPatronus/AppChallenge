function makeDraggable(){
    // Makes a div with class "draggable" draggable and resizable
    // within a 30x30 grid
    $(".draggable")
        .draggable({
            containment: "#canvas",
            grid: [30, 30]
        })
        .resizable({
            containment: "#canvas",
            grid: [30, 30]
        });
}

(function() {
    var app = angular.module('ClassroomModule', []);

    app.controller('ClassroomController', ["$scope", function($scope){

        $scope.tables = [];

        $scope.addTable = function(){
            $scope.tables.push({
                name: "Hello"
            });
        };

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


