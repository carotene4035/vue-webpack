import Todo from './todo'
/*
 * 一旦、immutable.jsを使用せずに書いてみる
 */
export default class Todolist {
  constructor () {
    this.todos = []
  }

  /** todoをtodolistsに追加 */
  addTodo (todo) {
    this.todos.push(new Todo(todo))
  }

  /** todoをtodolistsから削除 */
  removeTodo (index) {
    this.todos.splice(index, 1)
  }

  /** 終わっているタスクを返す */
  getDoneTodo () {
  }
}
