/**
 * @param btn iit is my btn that I will target my event
 * @param state init state toggle
 * @param html element that I will modific
 */
export const callbackEventDisplay = (object: IdisplaView, callback: (object:IdisplaView) => void, err: () => void) => {
  if (object.btn && object.html) callback(object);
  else err();
}

interface IdisplaView {
  btn: HTMLButtonElement
  html: HTMLElement
  close: HTMLButtonElement
}

