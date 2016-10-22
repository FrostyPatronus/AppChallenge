$(function(){
    $("#draggable").draggable({
        containment: "#canvas",
        grid: [30, 30]
    });
    $("#draggable").resizable({
        grid: [30, 30]
    });
});

