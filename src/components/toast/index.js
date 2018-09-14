import Vue from 'vue'
import ToastComponent from './alert.vue'

let instance
const defaultOptions = {
  show: false,
  message: ''
}

const initInstance = () => {
  const ToastConstructor = Vue.extend(ToastComponent)

  instance = new ToastConstructor({
    el: document.createElement('div')
  })

  document.body.appendChild(instance.$el)
}

const Toast = (options = {}) => {
  if (typeof options === 'string') {
    options = { message: options }
  }
  options = { ...defaultOptions, ...options }

  if (!instance) {
    initInstance()
  }

  clearTimeout(instance.timer)

  Object.assign(instance, {...options})

  if (options.duration > 0) {
    instance.timer = setTimeout(() => {
      instance.show = false
    }, options.duration)
  }

  return instance
}

const createMethod = type => (options = {}) => {
  return Toast({
    show: true,
    duration: 2000,
    message: typeof options === 'object' ? options.message : options,
    ...options
  })
}

Toast.show = createMethod()

Toast.close = () => {
  instance.show = false
}

Vue.prototype.$alert = Toast

export default Toast
export {
  ToastComponent as Toast
}
