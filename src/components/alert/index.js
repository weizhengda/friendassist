import Vue from 'vue'
import AlertComponent from './alert.vue'

let instance
const defaultOptions = {
  show: false,
  message: ''
}

const initInstance = () => {
  const AlertConstructor = Vue.extend(AlertComponent)

  instance = new AlertConstructor({
    el: document.createElement('div')
  })

  document.body.appendChild(instance.$el)
}

const Alert = (options = {}) => {
  if (typeof options === 'string') {
    options = { message: options }
  }
  options = { ...defaultOptions, ...options }

  if (!instance) {
    initInstance()
  }


  Object.assign(instance, {...options})

  return instance
}

const createMethod = type => (options = {}) => {
  return Alert({
    show: true,
    message: typeof options === 'object' ? options.message : options,
    ...options
  })
}

Alert.show = createMethod()

Alert.close = () => {
  instance.show = false
}

Vue.prototype.$alert = Alert

export default Alert
export {
  Alert as Alert
}
