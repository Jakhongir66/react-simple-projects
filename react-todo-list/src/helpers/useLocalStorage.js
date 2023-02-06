export function localStorageGetItem(key) {
   return JSON.parse(localStorage.getItem(key))
}

export function localStorageSetItem(key, value) {
   return localStorage.setItem(key, JSON.stringify(value))
}
