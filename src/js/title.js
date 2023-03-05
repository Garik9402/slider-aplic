export class Title {

   init() {
      const app = document.getElementById('app')
      app.append(this.createTitle())
   }
   createTitle() {
      const title = document.createElement('h1')
      title.classList = 'title'
      title.textContent = 'Пейзаж'
      return title
   }
}
