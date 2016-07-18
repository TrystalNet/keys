"use strict";
exports.KeyCodes = {
    UNDEF: 1, UP: 2, DOWN: 3, RIGHT: 4, LEFT: 5, HOME: 6, END: 7, DEL: 8, ESCAPE: 9, ENTER: 10,
    TAB: 11, INSERT: 12, ZERO: 13, ONE: 14, TWO: 15, THREE: 16, FOUR: 17, FIVE: 18, SIX: 19, SEVEN: 20,
    EIGHT: 21, NINE: 22, A: 23, B: 24, F: 25, H: 26, I: 27, J: 28, K: 29,
    U: 30, S: 31, PERIOD: 32, SPACE: 33, CTRL1: 35, CTRL2: 36, CTRL3: 37, CTRL4: 38, CTRL5: 39, CTRLA: 40,
    CTRLB: 41, CTRLC: 42, CTRLF: 43, CTRLH: 44, CTRLL: 45, CTRLP: 46, CTRLR: 47, CTRLS: 48, CTRLW: 49, CTRLV: 50,
    CTRLY: 51, CTRLZ: 52, CTRLSPACE: 53, CTRLLEFT: 54, CTRLRIGHT: 55, CTRLENTER: 56, CTRLUP: 57, CTRLDOWN: 58, METALEFT: 59, METARIGHT: 60,
    METAUP: 61, METADOWN: 62, METASPACE: 63, METAENTER: 64,
    SHIFTDOWN: 65, SHIFTUP: 66, CTRLSHIFTC: 67, CTRLSHIFTV: 68, CTRLESC: 69, ALT0: 70,
    F3: 1003, F5: 1005, F10: 1010, F11: 1011, F12: 1012,
    SHIFTF3: 1103,
    CTRLF4: 1204,
    ALT1: 2201, ALT2: 2202, ALT3: 2203, ALT4: 2204, ALT5: 2205, ALTLEFT: 2206, ALTRIGHT: 2207,
    CTRLK: 3000
};
function keyCodeOf(e) {
    if (!e)
        return exports.KeyCodes.UNDEF;
    var altKey = e.altKey, shiftKey = e.shiftKey, ctrlKey = e.ctrlKey, metaKey = e.metaKey;
    var which = e.keyCode || e.which || 0;
    if (altKey && ctrlKey)
        return exports.KeyCodes.UNDEF;
    if (altKey && shiftKey)
        return exports.KeyCodes.UNDEF;
    if (metaKey)
        switch (which) {
            case 37: return exports.KeyCodes.METALEFT;
            case 38: return exports.KeyCodes.METAUP;
            case 39: return exports.KeyCodes.METARIGHT;
            case 40: return exports.KeyCodes.METADOWN;
            case 13: return exports.KeyCodes.METAENTER;
            case 32: return exports.KeyCodes.METASPACE;
        }
    if (altKey)
        switch (which) {
            case 48: return exports.KeyCodes.ALT0;
            case 49: return exports.KeyCodes.ALT1;
            case 50: return exports.KeyCodes.ALT2;
            case 51: return exports.KeyCodes.ALT3;
            case 52: return exports.KeyCodes.ALT4;
            case 53: return exports.KeyCodes.ALT5;
            case 37: return exports.KeyCodes.ALTLEFT;
            case 39: return exports.KeyCodes.ALTRIGHT;
            default: return exports.KeyCodes.UNDEF;
        }
    if (shiftKey && ctrlKey)
        switch (which) {
            case 67: return exports.KeyCodes.CTRLSHIFTC;
            case 86: return exports.KeyCodes.CTRLSHIFTV;
            default: return exports.KeyCodes.UNDEF;
        }
    if (shiftKey)
        switch (which) {
            case 38: return exports.KeyCodes.SHIFTUP;
            case 40: return exports.KeyCodes.SHIFTDOWN;
            case 114: return exports.KeyCodes.SHIFTF3;
            default: return exports.KeyCodes.UNDEF;
        }
    if (ctrlKey)
        switch (which) {
            case 27: return exports.KeyCodes.CTRLESC;
            case 115: return exports.KeyCodes.CTRLF4;
            case 32: return exports.KeyCodes.CTRLSPACE;
            case 49: return exports.KeyCodes.CTRL1;
            case 50: return exports.KeyCodes.CTRL2;
            case 51: return exports.KeyCodes.CTRL3;
            case 52: return exports.KeyCodes.CTRL4;
            case 53: return exports.KeyCodes.CTRL5;
            case 37: return exports.KeyCodes.CTRLLEFT;
            case 39: return exports.KeyCodes.CTRLRIGHT;
            case 65: return exports.KeyCodes.CTRLA;
            case 66: return exports.KeyCodes.CTRLB;
            case 67: return exports.KeyCodes.CTRLC;
            case 70: return exports.KeyCodes.CTRLF;
            case 72: return exports.KeyCodes.CTRLH;
            case 75: return exports.KeyCodes.CTRLK;
            case 76: return exports.KeyCodes.CTRLL;
            case 80: return exports.KeyCodes.CTRLP;
            case 82: return exports.KeyCodes.CTRLR;
            case 83: return exports.KeyCodes.CTRLS;
            case 86: return exports.KeyCodes.CTRLV;
            case 87: return exports.KeyCodes.CTRLW;
            case 89: return exports.KeyCodes.CTRLY;
            case 90: return exports.KeyCodes.CTRLZ;
            case 13: return exports.KeyCodes.CTRLENTER;
            case 38: return exports.KeyCodes.CTRLUP;
            case 40: return exports.KeyCodes.CTRLDOWN;
            default:
                if (which !== 17)
                    console.log("unknown key combination ctrl+" + which);
                return exports.KeyCodes.UNDEF;
        }
    switch (which) {
        case 9: return exports.KeyCodes.TAB;
        case 13: return exports.KeyCodes.ENTER;
        case 27: return exports.KeyCodes.ESCAPE;
        case 32: return exports.KeyCodes.SPACE;
        case 35: return exports.KeyCodes.END;
        case 36: return exports.KeyCodes.HOME;
        case 37: return exports.KeyCodes.LEFT;
        case 38: return exports.KeyCodes.UP;
        case 39: return exports.KeyCodes.RIGHT;
        case 40: return exports.KeyCodes.DOWN;
        case 45: return exports.KeyCodes.INSERT;
        case 46: return exports.KeyCodes.DEL;
        case 48: return exports.KeyCodes.ZERO;
        case 49: return exports.KeyCodes.ONE;
        case 50: return exports.KeyCodes.TWO;
        case 51: return exports.KeyCodes.THREE;
        case 52: return exports.KeyCodes.FOUR;
        case 53: return exports.KeyCodes.FIVE;
        case 65: return exports.KeyCodes.A;
        case 66: return exports.KeyCodes.B;
        case 70: return exports.KeyCodes.F;
        case 72: return exports.KeyCodes.H;
        case 73: return exports.KeyCodes.I;
        case 74: return exports.KeyCodes.J;
        case 75: return exports.KeyCodes.K;
        case 83: return exports.KeyCodes.S;
        case 85: return exports.KeyCodes.U;
        case 114: return exports.KeyCodes.F3;
        case 116: return exports.KeyCodes.F5;
        case 121: return exports.KeyCodes.F10;
        case 122: return exports.KeyCodes.F11;
        case 123: return exports.KeyCodes.F12;
        case 190: return exports.KeyCodes.PERIOD;
        default: return exports.KeyCodes.UNDEF;
    }
}
exports.keyCodeOf = keyCodeOf;
