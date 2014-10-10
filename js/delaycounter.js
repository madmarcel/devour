'use strict';

var DelayCounter = function( delta ) {
        this.timestamp = getTimeStamp();
        this.deltas = delta || [];
        if ( delta && !Array.isArray( delta )) {
                this.deltas = [ delta ];
        }
        this.currentDelta = 0;
    };

DelayCounter.prototype = {
    start : function() {
        this.timestamp = getTimeStamp();
    },
    check: function() {
        if ( getTimeStamp() - this.timestamp > this.deltas[this.currentDelta] ) {
            this.next();
        }
    },
    next: function() {
        this.start();
        this.currentDelta++;
        if ( this.currentDelta >= this.deltas.length ) {
            this.currentDelta = 0;
        }
    },
    getStage: function() {
        this.check();
        return this.currentDelta;
    },
    isDone : function() {
        if ( getTimeStamp() - this.timestamp > this.deltas[this.currentDelta] ) {
            return true;
        }
        return false;
    },
    reset : function() {
        this.timestamp = getTimeStamp();
        this.currentDelta = 0;
    }
};
