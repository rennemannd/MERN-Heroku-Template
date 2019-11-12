const press = require('../controllers/press.server.controller.js'),
    express = require('express'), 
    router = express.Router()

router.route('/')
  .get(press.getAll)
  .post(press.createNew)
  
module.exports = router;