const router = require('express').Router()
const {User, Subject, Post} = require('../db/models')
module.exports = router

// get subject and all items  from user

router.get('/:userId', async (req, res, next) => {
  try {
    const post = await Subject.findAll({
      where: {
        userId: req.params.userId
      }
    })
    res.json(post)
  } catch (error) {
    next(error)
  }
})

// post new subject

router.post('/add/:userId', async (req, res, next) => {
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
