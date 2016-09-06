$(document).ready(function() {
    var $start_div = $("#start"); 

    $start_div.click(function() {
        $start_div.addClass("animated fadeOut");
        $start_div.one(CONST.get("ON_ANIMATION_END"), function(){
            $start_div.remove();
        });


    });
});
