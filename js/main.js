(function(){
    // Makes a div with class "draggable" draggable and resizable
    // within a 30x30 grid
    $(".draggable")
        .draggable({
            containment: "#canvas",
            grid: [30, 30]
        })
        .resizable({
            grid: [30, 30]
        });
})();

(function() {
    var app = angular.module('ClassroomModule', []);

    app.controller('ClassroomController', function($scope){
        
        $scope.tables = [{name: "Hello"}, {name: "Hi"}];

        $scope.addTable = function(){
            $scope.tables.push({
                name: "Hello"
            });
        };

        // angular.element(document).ready(function(){
        //     $(".draggable")
        //         .draggable({
        //             containment: "#canvas",
        //             grid: [30, 30]
        //         })
        //         .resizable({
        //             grid: [30, 30]
        //         });
        // });

    });
})();


