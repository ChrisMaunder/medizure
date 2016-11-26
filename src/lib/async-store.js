import {AsyncStorage} from 'react-native'

const cleanAsyncStorage = () => {
  return AsyncStorage.getAllKeys().then(function (keys) {
    console.log('REMOVED KEYS', keys)
    return AsyncStorage.multiRemove(keys)
  })
}

const deviceStorage = {
  get: function (key) {
    return AsyncStorage.getItem(key).then(function (value) {
      return JSON.parse(value)
    })
  },

  save: function (key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value))
  },

  update: function (key, value) {
    return deviceStorage.get(key).then((item) => {
      value = typeof value === 'string' ? value : Object.assign({}, item, value)
      return AsyncStorage.setItem(key, JSON.stringify(value))
    })
  },

  delete: function (key) {
    return AsyncStorage.removeItem(key)
  }
}

export {
  deviceStorage as asyncStore,
  cleanAsyncStorage
}
