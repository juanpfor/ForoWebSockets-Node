const router = require("express").Router();

const forumController = require("../controllers/forum/forum")



router.get('/foro', forumController.firstView)


module.exports = router;
