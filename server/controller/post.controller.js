const db = require('../db')

class PostController {

	async createTask(req, res) {
		const { title } = req.body
		const newPost = await db.query(`INSERT INTO task (title) values ($1) RETURNING *`, [title])
		res.json(newPost.rows[0])
	}

	async getTasks(req, res) {
		const posts = await db.query('SELECT * FROM task')
		res.json(posts.rows)
	}

	async deleteTask(req, res) {
		const id = req.params.id
		const post = await db.query(`DELETE FROM task where id = $1`, [id])
		res.json(post.rows[0])
	}

}

module.exports = new PostController()