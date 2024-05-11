let beepCache: HTMLAudioElement
function playBeep() {
  if (typeof Audio !== 'undefined') {
    if (!beepCache) {
      beepCache = new Audio(`data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU${Array(1e3).join('123')}`)
      beepCache.volume = 0.1
    }

    beepCache.play()
  }
  // eslint-disable-next-line node/prefer-global/process
  else { process.stdout.write('\x07') }
}

export default function obnoxiousLog(message: any, ...optionalParams: any[]) {
  // eslint-disable-next-line no-console
  console.log(message, ...optionalParams)
  playBeep()
}
