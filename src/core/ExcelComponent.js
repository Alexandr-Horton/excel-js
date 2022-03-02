import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }

<<<<<<< HEAD
=======
  // Возвращает шаблон компонента
>>>>>>> 0dc1c50611f32a1a7371bde52975e4f0416b5f26
  toHTML() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListeners()
  }
}
