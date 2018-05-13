/** まずはimmutable.jsを使わずに実装してみる */
export default class Todo {
  constructor (data) {
    this.id = data.id
    this.content = data.content
    this.done = data.done
  }
}
