import axios from 'axios'
// import API_URL from '../config/config'

// TODO configへ移動
const API_URL = 'http://localhost:3000'

/** api操作用のオブジェクトは1つでいいので、シングルトン(クラスで定義せずにオブジェクトで定義) */
export const TodoAPI = {
  /** すべてのtodoを取得 */
  getAllTodo (callback) {
    axios.get(API_URL + '/todos')
      .then((response) => {
        callback(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
