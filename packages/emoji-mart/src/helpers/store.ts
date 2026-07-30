const PREFIX = 'emoji-mart.'

function getKey(key: string): string {
  return `${PREFIX}${key}`
}

function set(key: string, value: string) {
  try {
    window.localStorage[getKey(key)] = JSON.stringify(value)
  } catch (error) {}
}

function get(key: string): any {
  try {
    const value = window.localStorage[getKey(key)]

    if (value) {
      return JSON.parse(value)
    }
  } catch (error) {}
}

export default { set, get, getKey }
