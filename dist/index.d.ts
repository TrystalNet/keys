export declare enum KeyCodes {
    UNDEF = 1,
    UP = 2,
    DOWN = 3,
    RIGHT = 4,
    LEFT = 5,
    HOME = 6,
    END = 7,
    DEL = 8,
    ESCAPE = 9,
    ENTER = 10,
    TAB = 11,
    INSERT = 12,
    ZERO = 13,
    ONE = 14,
    TWO = 15,
    THREE = 16,
    FOUR = 17,
    FIVE = 18,
    SIX = 19,
    SEVEN = 20,
    EIGHT = 21,
    NINE = 22,
    A = 23,
    B = 24,
    F = 25,
    H = 26,
    I = 27,
    J = 28,
    K = 29,
    U = 30,
    S = 31,
    PERIOD = 32,
    SPACE = 33,
    CTRL1 = 35,
    CTRL2 = 36,
    CTRL3 = 37,
    CTRL4 = 38,
    CTRL5 = 39,
    CTRLA = 40,
    CTRLB = 41,
    CTRLC = 42,
    CTRLF = 43,
    CTRLH = 44,
    CTRLL = 45,
    CTRLP = 46,
    CTRLR = 47,
    CTRLS = 48,
    CTRLW = 49,
    CTRLV = 50,
    CTRLY = 51,
    CTRLZ = 52,
    CTRLSPACE = 53,
    CTRLLEFT = 54,
    CTRLRIGHT = 55,
    CTRLENTER = 56,
    CTRLUP = 57,
    CTRLDOWN = 58,
    METALEFT = 59,
    METARIGHT = 60,
    METAUP = 61,
    METADOWN = 62,
    METASPACE = 63,
    METAENTER = 64,
    SHIFTDOWN = 65,
    SHIFTUP = 66,
    CTRLSHIFTC = 67,
    CTRLSHIFTV = 68,
    CTRLESC = 69,
    ALT0 = 70,
    F3 = 1003,
    F5 = 1005,
    F10 = 1010,
    F11 = 1011,
    F12 = 1012,
    SHIFTF3 = 1103,
    CTRLF4 = 1204,
    ALT1 = 2201,
    ALT2 = 2202,
    ALT3 = 2203,
    ALT4 = 2204,
    ALT5 = 2205,
    ALTLEFT = 2206,
    ALTRIGHT = 2207,
    CTRLK = 3000,
}
export interface IKeyEvent {
    altKey: boolean;
    shiftKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    keyCode: number | undefined;
    which: number | undefined;
}
export declare function keyCodeOf(e: IKeyEvent): KeyCodes;
