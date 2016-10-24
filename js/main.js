$(function() {

    var options = {
        cellHeight: 80,
        verticalMargin: 10
    };
    $('.grid-stack').gridstack(options);

});

(function() {
    var app = angular.module('ClassroomModule', []);

    app.controller('ClassroomController', ["$scope", function($scope){

        $scope.tables = [{name: "Hello"}, {name: "Hello"}];

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


