export function utc(date: Date = new Date): Date {
  let utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds())
  return new Date(utc)
}

export function toIsoStringWithTimezone(date: Date): string {
  let tzo = -date.getTimezoneOffset()
  let dif = tzo >= 0 ? '+' : '-'

  return date.getFullYear() +
    '-' + pad(date.getMonth() + 1) +
    '-' + pad(date.getDate()) +
    'T' + pad(date.getHours()) +
    ':' + pad(date.getMinutes()) +
    ':' + pad(date.getSeconds()) +
    dif + pad(tzo / 60) +
    ':' + pad(tzo % 60)
}

function pad(num: number) {
  var norm = Math.floor(Math.abs(num))
  return (norm < 10 ? '0' : '') + norm
}
