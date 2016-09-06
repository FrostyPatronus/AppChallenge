$(document).ready(function() {
    var $start_div = $("#start"); 

    // If the user clicks on anywhere on the start page,
    // id=start will disappear and be removed
    $start_div.click(function() {
        $start_div.addClass("animated fadeOut");
        $start_div.one(CONST.get("ON_ANIMATION_END"), function(){
            $start_div.remove();
        });


    });
});
