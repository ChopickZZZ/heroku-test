import axios from 'axios'
import { Task } from './types'
const url = 'api/posts'

class PostService {

	static getPosts(): Promise<Task[]> {
		return new Promise(async (resolve, reject) => {
			try {
				const res = await axios.get(url)
				const data = res.data
				resolve(data)
			}
			catch (err) {
				reject(err)
			}
		})
	}

	static insertPost(title: string) {
		return axios.post(url, {
			title
		})
	}

	static deletePost(id: string) {
		return axios.delete(`${url}/${id}`)
	}

}

export default PostService