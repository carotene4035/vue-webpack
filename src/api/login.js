import axios from 'axios'
// import API_URL from '../config/config'

// TODO configへ移動
const API_URL = 'http://localhost:3000'

/** api操作用のオブジェクトは1つでいいので、シングルトン(クラスで定義せずにオブジェクトで定義) */
const LoginAPI = {
  /** すべてのtodoを取得 */
  auth (id, password, callback) {
    axios.get(API_URL + '/login')
      .then((response) => {
        callback(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export default LoginAPI
