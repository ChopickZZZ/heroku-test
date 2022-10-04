const express = require('express')
const router = express.Router()
const postController = require('../../controller/post.controller')

router.post('/', postController.createTask)
router.delete('/:id', postController.deleteTask)
router.get('/', postController.getTasks)

module.exports = router