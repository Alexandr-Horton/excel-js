import {ExcelComponent} from '@core/ExcelComponent'

export class Header extends ExcelComponent {
  static className = 'excel__header'

  toHTML() {
    return `
<<<<<<< HEAD
      <input type="text" class="input" value="New Table" />
=======
      <input type="text" class="input" value="Новая таблица" />
>>>>>>> 0dc1c50611f32a1a7371bde52975e4f0416b5f26

      <div>

        <div class="button">
          <i class="material-icons">delete</i>
        </div>

        <div class="button">
          <i class="material-icons">exit_to_app</i>
        </div>

      </div>
    `
  }
}
