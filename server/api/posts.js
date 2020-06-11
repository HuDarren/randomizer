const router = require('express').Router()
const {User, Subject, Post} = require('../db/models')
module.exports = router

// get subject and all items  from user

router.get('/from/:username', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.params.username
      }
    })
    const allUserPosts = await Post.findAll({
      where: {
        userId: user.id
      },
      include: [{model: Subject, include: [{model: Post}]}]
    })
    res.json(allUserPosts)
  } catch (error) {
    next(error)
  }
})

// post new subject

router.post('/add/:username', async (req, res, next) => {
  try {
    // const user = await User.findOne({
    //     where: {
    //         username: req.params.username
    //     }
    // })

    const newPost = await Subject.create(req.body)
    res.json(newPost)
  } catch (error) {
    next(error)
  }
})

// delete subject
