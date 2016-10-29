// WE DEFINE SOME CONSTANTS RIGHT HERE.

/*

// USAGE: // 
If you want to use the constant, say, 'ON_ANIMATION_END', you gotta
include this file in your javascript file OR you can include this 
in your HTML file BEFORE the JS file you wanna use constants in

After that, to use 'ON_ANIMATION_END', type in
CONSTANT.get('ON_ANIMATION_END');
Etc...

// TO ADD CONSTANTS //
In the  'var private' section, add a comma after the last constants entry and
type in:
<CONSTANT NAME>: <CONSTANT VALUE>

*/

var CONST = (function() {
     var private = {
        'ON_ANIMATION_END': 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        STEP: 75,
        NEW_CLASS_TEXT: "New Class"
     };

     return {
        get: function(name) { return private[name]; }
    };
})();
