import { Router } from 'express';
import { PostModel } from '../models/Post.js'
import { logger } from '../util/logger.js';

const adminRouter = new Router()

adminRouter.get('/', (req, res) => {
    res.render('admin/adminPanel', {post: post})
    PostModel.find().then((post) => {
    }).catch((err) => {
        logger.error(err)
    })

})

adminRouter.route('/add/post')
    .get((req, res, next) => {
            res.render('admin/addPostForm')
    })
    .post((req, res, next) => {
        const newPost = {
            title: req.body.title,
            description: req.body.description,
            content: req.body.content
        }

        new PostModel(newPost).save()
            .then(() => {
                logger.info('Created post with success')
                res.redirect('/')
            })
            .catch((err) => logger.error(`Couldn't create. Error: ${err}`))
        /* Database communication */
    })

adminRouter.route('/edit/:id')
    .get((req, res, next) => {
        /* database.find(id) */
        res.render('admin/editPostForm')

        
    })
    .post((req, res, next) => {
        /* database communication */
    })


export { adminRouter }
