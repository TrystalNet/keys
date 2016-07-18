declare module "@trystal/keys" {
  export const KeyCodes: {
      UNDEF: number;
      UP: number;
      DOWN: number;
      RIGHT: number;
      LEFT: number;
      HOME: number;
      END: number;
      DEL: number;
      ESCAPE: number;
      ENTER: number;
      TAB: number;
      INSERT: number;
      ZERO: number;
      ONE: number;
      TWO: number;
      THREE: number;
      FOUR: number;
      FIVE: number;
      SIX: number;
      SEVEN: number;
      EIGHT: number;
      NINE: number;
      A: number;
      B: number;
      F: number;
      H: number;
      I: number;
      J: number;
      K: number;
      U: number;
      S: number;
      PERIOD: number;
      SPACE: number;
      CTRL1: number;
      CTRL2: number;
      CTRL3: number;
      CTRL4: number;
      CTRL5: number;
      CTRLA: number;
      CTRLB: number;
      CTRLC: number;
      CTRLF: number;
      CTRLH: number;
      CTRLL: number;
      CTRLP: number;
      CTRLR: number;
      CTRLS: number;
      CTRLW: number;
      CTRLV: number;
      CTRLY: number;
      CTRLZ: number;
      CTRLSPACE: number;
      CTRLLEFT: number;
      CTRLRIGHT: number;
      CTRLENTER: number;
      CTRLUP: number;
      CTRLDOWN: number;
      METALEFT: number;
      METARIGHT: number;
      METAUP: number;
      METADOWN: number;
      METASPACE: number;
      METAENTER: number;
      SHIFTDOWN: number;
      SHIFTUP: number;
      CTRLSHIFTC: number;
      CTRLSHIFTV: number;
      CTRLESC: number;
      ALT0: number;
      F3: number;
      F5: number;
      F10: number;
      F11: number;
      F12: number;
      SHIFTF3: number;
      CTRLF4: number;
      ALT1: number;
      ALT2: number;
      ALT3: number;
      ALT4: number;
      ALT5: number;
      ALTLEFT: number;
      ALTRIGHT: number;
      CTRLK: number;
  };
  export interface IKeyEvent {
      altKey: boolean;
      shiftKey: boolean;
      ctrlKey: boolean;
      metaKey: boolean;
      keyCode: number | undefined;
      which: number | undefined;
  }
  export function keyCodeOf(e: IKeyEvent): number;
}
