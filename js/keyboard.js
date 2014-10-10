'use strict';

var keyState = {};

var Keyboard = function() {
    keyState = {};

    window.addEventListener('keydown', function(e) {
        keyState[e.keyCode] = true;
    });

    window.addEventListener('keyup', function(e) {
        keyState[e.keyCode] = false;
    });

    this.KEYS = { LEFT: 37, RIGHT: 39, UP: 38, DOWN: 40, SPACE: 32, A: 65, C: 67, D: 68, E: 69, M: 77, P: 80, Q: 81, S: 83, W: 87, X: 88, Z: 90 };
};

Keyboard.prototype = {
    'isDownNoDelay' : function(keyCode) {
        if( keyState[keyCode] === true ) return true;
        return false;

    }
};
