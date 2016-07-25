// NB CTRLN,CTRLSHIFTN,CTRLT,CTRLSHIFTT,CTRLW,CTRLSHIFTW   may be reserved by the browser
export enum KeyCodes {
  UNDEF= 1, UP= 2, DOWN= 3, RIGHT= 4, LEFT= 5, HOME= 6, END= 7, DEL= 8, ESCAPE= 9, ENTER= 10,
  TAB= 11, INSERT= 12, ZERO= 13, ONE= 14, TWO= 15, THREE= 16, FOUR= 17, FIVE= 18, SIX= 19, SEVEN= 20,
  EIGHT= 21, NINE= 22, A= 23, B= 24, F= 25, H= 26, I= 27, J= 28, K= 29,
  U= 30, S= 31, PERIOD= 32, SPACE= 33, /* ???, */ CTRL1= 35, CTRL2= 36, CTRL3= 37, CTRL4= 38, CTRL5= 39, CTRLA= 40,
  CTRLB= 41, CTRLC= 42, CTRLF= 43, CTRLH= 44, CTRLL= 45, CTRLP= 46, CTRLR= 47, CTRLS= 48, CTRLW= 49, CTRLV= 50,
  CTRLY= 51, CTRLZ= 52, CTRLSPACE= 53, CTRLLEFT= 54, CTRLRIGHT= 55, CTRLENTER= 56, CTRLUP= 57, CTRLDOWN= 58, METALEFT= 59, METARIGHT= 60,
  METAUP= 61, METADOWN= 62, METASPACE= 63, METAENTER= 64,
  SHIFTDOWN= 65, SHIFTUP= 66, CTRLSHIFTC= 67, CTRLSHIFTV= 68, CTRLESC= 69, ALT0= 70,
  F3= 1003, F5= 1005, F10= 1010, F11= 1011, F12= 1012,
  SHIFTF3= 1103,
  CTRLF4= 1204,
  ALT1= 2201, ALT2= 2202, ALT3= 2203, ALT4= 2204, ALT5= 2205, ALTLEFT= 2206, ALTRIGHT= 2207,
  CTRLK= 3000
}

export interface IKeyEvent {
  altKey:boolean
  shiftKey:boolean
  ctrlKey:boolean
  metaKey:boolean
  keyCode:number | undefined 
  which:number | undefined
}

export function keyCodeOf(e:IKeyEvent) {
  if (!e) return KeyCodes.UNDEF
  let {altKey, shiftKey, ctrlKey, metaKey} = e
  let which = e.keyCode || e.which || 0

  if (altKey && ctrlKey) return KeyCodes.UNDEF
  if (altKey && shiftKey) return KeyCodes.UNDEF

  if (metaKey) switch (which) {
    case 37: return KeyCodes.METALEFT
    case 38: return KeyCodes.METAUP
    case 39: return KeyCodes.METARIGHT
    case 40: return KeyCodes.METADOWN
    case 13: return KeyCodes.METAENTER
    case 32: return KeyCodes.METASPACE
  }

  if (altKey) switch (which) {
    case 48: return KeyCodes.ALT0
    case 49: return KeyCodes.ALT1
    case 50: return KeyCodes.ALT2
    case 51: return KeyCodes.ALT3
    case 52: return KeyCodes.ALT4
    case 53: return KeyCodes.ALT5
    case 37: return KeyCodes.ALTLEFT
    case 39: return KeyCodes.ALTRIGHT
    default: return KeyCodes.UNDEF
  }
  if (shiftKey && ctrlKey) switch (which) {
    case 67: return KeyCodes.CTRLSHIFTC
    case 86: return KeyCodes.CTRLSHIFTV
    default: return KeyCodes.UNDEF
  }
  if (shiftKey) switch (which) {
    case 38: return KeyCodes.SHIFTUP
    case 40: return KeyCodes.SHIFTDOWN
    case 114: return KeyCodes.SHIFTF3
    default: return KeyCodes.UNDEF
  }
  if (ctrlKey) switch (which) {
    case 27: return KeyCodes.CTRLESC
    case 115: return KeyCodes.CTRLF4
    case 32: return KeyCodes.CTRLSPACE
    case 49: return KeyCodes.CTRL1
    case 50: return KeyCodes.CTRL2
    case 51: return KeyCodes.CTRL3
    case 52: return KeyCodes.CTRL4
    case 53: return KeyCodes.CTRL5
    case 37: return KeyCodes.CTRLLEFT
    case 39: return KeyCodes.CTRLRIGHT
    case 65: return KeyCodes.CTRLA
    case 66: return KeyCodes.CTRLB
    case 67: return KeyCodes.CTRLC
    case 70: return KeyCodes.CTRLF
    case 72: return KeyCodes.CTRLH
    case 75: return KeyCodes.CTRLK
    case 76: return KeyCodes.CTRLL
    case 80: return KeyCodes.CTRLP
    case 82: return KeyCodes.CTRLR
    case 83: return KeyCodes.CTRLS
    case 86: return KeyCodes.CTRLV
    case 87: return KeyCodes.CTRLW
    case 89: return KeyCodes.CTRLY
    case 90: return KeyCodes.CTRLZ
    case 13: return KeyCodes.CTRLENTER
    case 38: return KeyCodes.CTRLUP
    case 40: return KeyCodes.CTRLDOWN
    default:
      if (which !== 17) console.log(`unknown key combination ctrl+${which}`)
      return KeyCodes.UNDEF
  }
  switch (which) {
    case 9: return KeyCodes.TAB
    case 13: return KeyCodes.ENTER
    case 27: return KeyCodes.ESCAPE
    case 32: return KeyCodes.SPACE
    case 35: return KeyCodes.END
    case 36: return KeyCodes.HOME
    case 37: return KeyCodes.LEFT
    case 38: return KeyCodes.UP
    case 39: return KeyCodes.RIGHT
    case 40: return KeyCodes.DOWN
    case 45: return KeyCodes.INSERT
    case 46: return KeyCodes.DEL
    case 48: return KeyCodes.ZERO
    case 49: return KeyCodes.ONE
    case 50: return KeyCodes.TWO
    case 51: return KeyCodes.THREE
    case 52: return KeyCodes.FOUR
    case 53: return KeyCodes.FIVE
    case 65: return KeyCodes.A
    case 66: return KeyCodes.B
    case 70: return KeyCodes.F
    case 72: return KeyCodes.H
    case 73: return KeyCodes.I
    case 74: return KeyCodes.J
    case 75: return KeyCodes.K
    case 83: return KeyCodes.S
    case 85: return KeyCodes.U
    case 114: return KeyCodes.F3
    case 116: return KeyCodes.F5
    case 121: return KeyCodes.F10
    case 122: return KeyCodes.F11
    case 123: return KeyCodes.F12
    case 190: return KeyCodes.PERIOD
    default: return KeyCodes.UNDEF
  }
}
